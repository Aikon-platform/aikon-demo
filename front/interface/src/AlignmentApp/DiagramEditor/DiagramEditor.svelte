<script lang="ts">
    import { Dialog } from "bits-ui";
    import { untrack } from "svelte";
    import type { AlignmentState } from "../state.svelte";
    import {
        applyTransform,
        identityMatrix,
        invertMatrix,
        matrixToCss,
        multiplyMatrix,
        scaleMatrix,
        translationMatrix,
        type TransformMatrix,
    } from "../transform";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import {
        arcPathD,
        arcToPath,
        canBecomeLine,
        handles,
        lineToPath,
        moveHandle,
        newId,
        pathD,
        pathToLine,
        pivot,
        toHexColor,
        translate,
        viewBoxTransform,
        type Diagram,
        type DiagramItem,
        type HandleKey,
        type Primitive,
        type Pt,
    } from "./diagram";

    interface Props {
        alignmentState: AlignmentState;
        /** Index of the SVG layer being edited */
        index: number;
        diagram: Diagram | null;
        dirty: boolean;
    }

    let {
        alignmentState,
        index,
        diagram = $bindable(),
        dirty = $bindable(),
    }: Props = $props();

    type Tool = "select" | "line" | "ellipse" | "arc";
    const TOOLS: { tool: Tool; icon: string; label: string; key: string }[] = [
        {
            tool: "select",
            icon: "mdi:cursor-default",
            label: "Select",
            key: "v",
        },
        { tool: "line", icon: "mdi:vector-line", label: "Line", key: "l" },
        {
            tool: "ellipse",
            icon: "mdi:ellipse-outline",
            label: "Ellipse",
            key: "e",
        },
        { tool: "arc", icon: "mdi:vector-curve", label: "Arc", key: "a" },
    ];
    /** Order in which control points are placed when creating a primitive */
    const CREATE_SEQUENCE: Record<Exclude<Tool, "select">, HandleKey[]> = {
        line: ["p1", "p2"],
        ellipse: ["center", "rx"],
        arc: ["p1", "p3", "p2"],
    };
    const HANDLE_RADIUS = 5;
    const HIT_WIDTH = 10;
    const DRAG_THRESHOLD = 4;

    const layer = $derived(alignmentState.images[index]);

    let tool = $state<Tool>("select");
    let selectedId = $state<string | null>(null);
    let stroke = $state("#ff0000");
    let strokeWidth = $state(2);
    let showBackground = $state(true);
    let backgroundOpacity = $state(0.6);

    const selected = $derived(
        (diagram?.items.find(
            (it) => it.id === selectedId && it.kind !== "foreign",
        ) as Primitive | undefined) ?? null,
    );

    export function reset() {
        dirty = false;
        selectedId = null;
        creating = null;
        resetView();
        dirty = false;
    }

    // ---- View: user units -> layer pixels -> screen ----

    let container: HTMLDivElement | undefined = $state();
    let containerWidth = $state(0);
    let containerHeight = $state(0);
    let zoom = $state(1);
    let pan = $state({ x: 0, y: 0 });

    $effect(() => {
        if (!container) return;
        const observer = new ResizeObserver(() => {
            const rect = container!.getBoundingClientRect();
            containerWidth = rect.width;
            containerHeight = rect.height;
        });
        observer.observe(container);
        return () => observer.disconnect();
    });

    function resetView() {
        zoom = 1;
        pan = { x: 0, y: 0 };
    }

    /** Layer pixels -> screen: fit the layer in the container, then zoom/pan */
    const view = $derived.by(() => {
        const W = layer.image.width;
        const H = layer.image.height;
        const margin = 20;
        const s = Math.max(
            1e-6,
            Math.min(
                (containerWidth - 2 * margin) / W,
                (containerHeight - 2 * margin) / H,
            ),
        );
        const fit = multiplyMatrix(
            translationMatrix(
                (containerWidth - s * W) / 2,
                (containerHeight - s * H) / 2,
            ),
            scaleMatrix(s, s),
        );
        const zoomPan = multiplyMatrix(
            translationMatrix(pan.x, pan.y),
            scaleMatrix(zoom, zoom),
        );
        return multiplyMatrix(zoomPan, fit);
    });

    /** SVG user units -> layer pixels, including the layer's display flip */
    const userToPixel = $derived.by(() => {
        if (!diagram) return identityMatrix();
        const W = layer.image.width;
        const { sx, sy, tx, ty } = viewBoxTransform(diagram);
        let m = { ...scaleMatrix(sx, sy), e: tx, f: ty };
        if (layer.hFlip) {
            m = multiplyMatrix({ ...scaleMatrix(-1, 1), e: W }, m);
        }
        return m;
    });

    const userToScreen = $derived(multiplyMatrix(view, userToPixel));
    const screenToUser = $derived(
        invertMatrix(userToScreen) ?? identityMatrix(),
    );
    /** Screen pixels per user unit */
    const userScale = $derived(
        Math.sqrt(
            Math.abs(
                userToScreen.a * userToScreen.d -
                    userToScreen.b * userToScreen.c,
            ),
        ) || 1,
    );

    const svgTransform = (m: TransformMatrix) =>
        `matrix(${m.a} ${m.b} ${m.c} ${m.d} ${m.e} ${m.f})`;
    const toScreen = (p: Pt) => applyTransform(userToScreen, p.x, p.y);

    function eventToUser(e: PointerEvent | WheelEvent): Pt {
        const rect = container!.getBoundingClientRect();
        return applyTransform(
            screenToUser,
            e.clientX - rect.left,
            e.clientY - rect.top,
        );
    }

    /** Other visible layers, warped as if the edited layer was the reference */
    const backgrounds = $derived(
        alignmentState.images
            .map((img, j) => ({ img, j }))
            .filter(({ img, j }) => j !== index && img.visible)
            .map(({ img, j }) => ({
                img,
                warp: alignmentState.warpMatrix(j, index),
            }))
            .filter((b) => b.warp !== null),
    );

    // ---- Interaction ----

    type Drag =
        | { kind: "handle"; prim: Primitive; key: HandleKey }
        | { kind: "pivot"; prim: Primitive; last: Pt }
        | { kind: "pan"; start: { x: number; y: number }; origin: Pt };

    let drag: Drag | null = null;
    let spaceHeld = $state(false);
    let panning = $state(false);

    /** Primitive being created: its control points are placed in sequence */
    let creating = $state<{
        prim: Primitive;
        sequence: string[];
        stage: number;
        downAt: { x: number; y: number };
        isFirstClick: boolean;
        /** Arc tool: the three points the bezier path is computed from */
        arc?: { p1: Pt; p2: Pt; p3: Pt };
    } | null>(null);

    function newPrimitive(kind: Exclude<Tool, "select">, p: Pt): Primitive {
        const base = { id: newId(), stroke, strokeWidth };
        switch (kind) {
            case "line":
                return { ...base, kind, p1: { ...p }, p2: { ...p } };
            case "ellipse":
                return {
                    ...base,
                    kind,
                    center: { ...p },
                    rx: 0,
                    ry: 0,
                    rotation: 0,
                };
            case "arc":
                return {
                    ...base,
                    kind,
                    p1: { ...p },
                    p2: { ...p },
                    p3: { ...p },
                };
        }
    }

    function updateCreating(p: Pt) {
        if (!creating) return;
        const prim = creating.prim;
        const key = creating.sequence[creating.stage];
        if (creating.arc && prim.kind === "path") {
            const arc = creating.arc;
            if (key === "p1") arc.p1 = { ...p };
            else if (key === "p3") arc.p3 = { ...p };
            else arc.p2 = { ...p };
            if (key !== "p2") {
                // Keep the through point in the middle until it is placed
                arc.p2 = {
                    x: (arc.p1.x + arc.p3.x) / 2,
                    y: (arc.p1.y + arc.p3.y) / 2,
                };
            }
            Object.assign(prim, arcToPath(arc.p1, arc.p2, arc.p3));
            return;
        }
        moveHandle(prim, key as HandleKey, p);
        if (prim.kind === "ellipse" && key === "rx") prim.ry = prim.rx;
    }

    function advanceCreating() {
        if (!creating) return;
        creating.stage++;
        if (creating.stage < creating.sequence.length) return;
        const prim = creating.prim;
        creating = null;
        if (isDegenerate(prim)) {
            removeItem(prim.id);
        } else {
            selectedId = prim.id;
        }
    }

    export function cancelCreating() {
        if (!creating) return;
        removeItem(creating.prim.id);
        creating = null;
    }

    function isDegenerate(p: Primitive): boolean {
        const eps = 1e-6;
        switch (p.kind) {
            case "line":
                return Math.hypot(p.p2.x - p.p1.x, p.p2.y - p.p1.y) < eps;
            case "ellipse":
                return p.rx < eps || p.ry < eps;
            case "arc":
                return Math.hypot(p.p3.x - p.p1.x, p.p3.y - p.p1.y) < eps;
            default:
                return false;
        }
    }

    function onPointerDown(e: PointerEvent) {
        if (!diagram) return;
        (e.currentTarget as Element).setPointerCapture(e.pointerId);
        if (e.button === 1 || (e.button === 0 && spaceHeld)) {
            e.preventDefault();
            drag = {
                kind: "pan",
                start: { x: e.clientX, y: e.clientY },
                origin: { ...pan },
            };
            panning = true;
            return;
        }
        if (e.button !== 0) return;
        const p = eventToUser(e);

        if (tool !== "select") {
            if (creating) {
                creating.downAt = { x: e.clientX, y: e.clientY };
                creating.isFirstClick = false;
                return;
            }
            const prim = newPrimitive(tool, p);
            diagram.items.push(prim);
            // Work on the reactive proxy, not the plain object
            const proxy = diagram.items[diagram.items.length - 1] as Primitive;
            creating = {
                prim: proxy,
                sequence: CREATE_SEQUENCE[tool],
                arc: tool === "arc" ? { p1: p, p2: p, p3: p } : undefined,
                stage: 1,
                downAt: { x: e.clientX, y: e.clientY },
                isFirstClick: true,
            };
            selectedId = proxy.id;
            dirty = true;
            return;
        }

        // Select tool: handles and strokes carry their target in data-*
        const target = e.target as Element;
        const handleKey = target.getAttribute("data-handle");
        if (selected && handleKey === "pivot") {
            drag = { kind: "pivot", prim: selected, last: p };
        } else if (selected && handleKey) {
            drag = {
                kind: "handle",
                prim: selected,
                key: handleKey as HandleKey,
            };
        } else {
            selectedId = target.getAttribute("data-prim");
        }
    }

    function onPointerMove(e: PointerEvent) {
        if (drag?.kind === "pan") {
            pan = {
                x: drag.origin.x + e.clientX - drag.start.x,
                y: drag.origin.y + e.clientY - drag.start.y,
            };
            return;
        }
        if (!diagram) return;
        const p = eventToUser(e);
        if (creating) {
            updateCreating(p);
        } else if (drag?.kind === "handle") {
            moveHandle(drag.prim, drag.key, p);
            dirty = true;
        } else if (drag?.kind === "pivot") {
            translate(drag.prim, p.x - drag.last.x, p.y - drag.last.y);
            drag.last = p;
            dirty = true;
        }
    }

    function onPointerUp(e: PointerEvent) {
        drag = null;
        panning = false;
        if (creating && e.button === 0) {
            const moved = Math.hypot(
                e.clientX - creating.downAt.x,
                e.clientY - creating.downAt.y,
            );
            // Click-click and press-drag-release both place a point
            if (!creating.isFirstClick || moved > DRAG_THRESHOLD) {
                advanceCreating();
            }
        }
    }

    function onWheel(e: WheelEvent) {
        e.preventDefault();
        const rect = container!.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const newZoom = Math.min(
            50,
            Math.max(0.05, zoom * Math.exp(-e.deltaY * 0.001)),
        );
        // Keep the point under the cursor fixed
        pan = {
            x: mx - (newZoom / zoom) * (mx - pan.x),
            y: my - (newZoom / zoom) * (my - pan.y),
        };
        zoom = newZoom;
    }

    function onKeyDown(e: KeyboardEvent) {
        if (!open) return;
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "SELECT") return;
        if (e.code === "Space") {
            spaceHeld = true;
            e.preventDefault();
            return;
        }
        if (e.key === "Escape") {
            // Escape cancels the current action instead of closing the dialog
            if (creating || selectedId) {
                e.preventDefault();
                e.stopPropagation();
                if (creating) cancelCreating();
                else selectedId = null;
            }
            return;
        }
        if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
            e.preventDefault();
            removeItem(selectedId);
            return;
        }
        const t = TOOLS.find((t) => t.key === e.key.toLowerCase());
        if (t && !e.ctrlKey && !e.metaKey && !e.altKey) setTool(t.tool);
    }

    function onKeyUp(e: KeyboardEvent) {
        if (e.code === "Space") spaceHeld = false;
    }

    function setTool(t: Tool) {
        cancelCreating();
        tool = t;
    }

    // ---- Item list & properties ----

    function removeItem(id: string) {
        if (!diagram) return;
        diagram.items = diagram.items.filter((it) => it.id !== id);
        if (selectedId === id) selectedId = null;
        dirty = true;
    }

    /** Move item at position `i` to `j` (paint order: last on top) */
    function moveItem(i: number, j: number) {
        if (!diagram || j < 0 || j >= diagram.items.length) return;
        const items = [...diagram.items];
        const [it] = items.splice(i, 1);
        items.splice(j, 0, it);
        diagram.items = items;
        dirty = true;
    }

    function setStroke(value: string) {
        stroke = value;
        if (selected) {
            selected.stroke = value;
            dirty = true;
        }
    }

    function setStrokeWidth(value: number) {
        if (!Number.isFinite(value) || value <= 0) return;
        strokeWidth = value;
        if (selected) {
            selected.strokeWidth = value;
            dirty = true;
        }
    }

    // Show the selected primitive's style in the inputs
    $effect(() => {
        if (selected) {
            stroke = toHexColor(selected.stroke);
            strokeWidth = selected.strokeWidth;
        }
    });

    /** Replace the selected line by a 2-point bezier path, or the reverse */
    function convertSelected() {
        if (!diagram || !selected) return;
        const i = diagram.items.findIndex((it) => it.id === selected.id);
        if (selected.kind === "line") diagram.items[i] = lineToPath(selected);
        else if (selected.kind === "path" && canBecomeLine(selected))
            diagram.items[i] = pathToLine(selected);
        else return;
        dirty = true;
    }

    function itemLabel(it: DiagramItem): string {
        if (it.kind !== "foreign") return it.kind;
        const tag = /^<\s*([\w:-]+)/.exec(it.markup)?.[1] ?? "element";
        return `<${tag}>`;
    }
</script>

<svelte:window onkeydown={onKeyDown} onkeyup={onKeyUp} />

<div class="diagram-toolbar">
    {#each TOOLS as t}
        <IconBtn
            icon={t.icon}
            title="{t.label} ({t.key.toUpperCase()})"
            class={["is-small", tool === t.tool ? "is-link" : "is-ghost"]}
            onclick={() => setTool(t.tool)}
        />
    {/each}
    <span class="diagram-toolbar-stretch"></span>
    <span class="diagram-toolbar-sep"></span>
    {#if showBackground}
        <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            bind:value={backgroundOpacity}
            title="Background opacity"
        />
    {/if}
    <IconBtn
        icon={showBackground ? "mdi:layers" : "mdi:layers-off"}
        title="Background"
        class={["is-small", showBackground ? "is-link" : "is-ghost"]}
        onclick={() => (showBackground = !showBackground)}
    />
    <span class="diagram-toolbar-sep"></span>
    <IconBtn
        icon="mdi:fit-to-page-outline"
        class="is-ghost is-small"
        onclick={resetView}
    />
</div>

<div class="diagram-main">
    <div
        bind:this={container}
        class="diagram-canvas"
        class:pannable={spaceHeld}
        class:panning
        class:drawing={tool !== "select"}
    >
        {#if showBackground}
            <div class="diagram-bg-wrapper" style:opacity={backgroundOpacity}>
                {#each backgrounds as { img, warp }}
                    <div
                        class="diagram-bg-layer"
                        style:transform={matrixToCss(
                            multiplyMatrix(view, warp!),
                        )}
                        style:width="{img.image.width}px"
                        style:height="{img.image.height}px"
                        style:opacity={img.opacity}
                    >
                        <img
                            src={img.image.data}
                            alt={img.image.file_name}
                            class:flipped={img.hFlip}
                            class:inverted={img.invertColors}
                        />
                    </div>
                {/each}
            </div>
        {/if}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <svg
            class="diagram-svg"
            onpointerdown={onPointerDown}
            onpointermove={onPointerMove}
            onpointerup={onPointerUp}
            onpointercancel={onPointerUp}
            onwheel={onWheel}
        >
            {#if diagram}
                <g transform={svgTransform(userToScreen)}>
                    <rect
                        class="diagram-page"
                        x={diagram.viewBox.x}
                        y={diagram.viewBox.y}
                        width={diagram.viewBox.w}
                        height={diagram.viewBox.h}
                        stroke-width={1 / userScale}
                    />
                    {#each diagram.items as it (it.id)}
                        {#if it.kind === "foreign"}
                            <g class="diagram-foreign">{@html it.markup}</g>
                        {:else}
                            {@const d =
                                it.kind === "arc"
                                    ? arcPathD(it)
                                    : it.kind === "path"
                                      ? pathD(it)
                                      : null}
                            {#if it.kind === "line"}
                                <line
                                    x1={it.p1.x}
                                    y1={it.p1.y}
                                    x2={it.p2.x}
                                    y2={it.p2.y}
                                    stroke={it.stroke}
                                    stroke-width={it.strokeWidth}
                                />
                                <line
                                    class="diagram-hit"
                                    data-prim={it.id}
                                    x1={it.p1.x}
                                    y1={it.p1.y}
                                    x2={it.p2.x}
                                    y2={it.p2.y}
                                    stroke-width={HIT_WIDTH / userScale}
                                />
                            {:else if it.kind === "ellipse"}
                                {@const tr = `rotate(${it.rotation} ${it.center.x} ${it.center.y})`}
                                <ellipse
                                    cx={it.center.x}
                                    cy={it.center.y}
                                    rx={it.rx}
                                    ry={it.ry}
                                    transform={tr}
                                    fill="none"
                                    stroke={it.stroke}
                                    stroke-width={it.strokeWidth}
                                />
                                <ellipse
                                    class="diagram-hit"
                                    data-prim={it.id}
                                    cx={it.center.x}
                                    cy={it.center.y}
                                    rx={it.rx}
                                    ry={it.ry}
                                    transform={tr}
                                    stroke-width={HIT_WIDTH / userScale}
                                />
                            {:else}
                                <path
                                    {d}
                                    fill="none"
                                    stroke={it.stroke}
                                    stroke-width={it.strokeWidth}
                                />
                                <path
                                    class="diagram-hit"
                                    data-prim={it.id}
                                    {d}
                                    stroke-width={HIT_WIDTH / userScale}
                                />
                            {/if}
                        {/if}
                    {/each}
                </g>

                {#if selected && !creating}
                    {@const hs = handles(selected).map((h) => ({
                        ...h,
                        s: toScreen(h.pt),
                    }))}
                    {@const pv = toScreen(pivot(selected))}
                    {#if selected.kind === "path"}
                        <!-- Control point guides: each c1 to its start anchor, c2 to its end anchor -->
                        {#each selected.segs as seg, i}
                            {#if seg.c1}
                                {@const from = toScreen(
                                    i === 0
                                        ? selected.start
                                        : selected.segs[i - 1].p,
                                )}
                                {@const to = toScreen(seg.p)}
                                {@const c1 = toScreen(seg.c1)}
                                {@const c2 = toScreen(seg.c2)}
                                <line
                                    class="diagram-guide"
                                    x1={from.x}
                                    y1={from.y}
                                    x2={c1.x}
                                    y2={c1.y}
                                />
                                <line
                                    class="diagram-guide"
                                    x1={to.x}
                                    y1={to.y}
                                    x2={c2.x}
                                    y2={c2.y}
                                />
                            {/if}
                        {/each}
                    {/if}
                    {#if selected.kind === "ellipse"}
                        {@const c = toScreen(selected.center)}
                        {#each hs.filter((h) => h.key !== "center") as h}
                            <line
                                class="diagram-guide"
                                x1={c.x}
                                y1={c.y}
                                x2={h.s.x}
                                y2={h.s.y}
                            />
                        {/each}
                    {/if}
                    {#each hs as h (h.key)}
                        {#if h.key === "ry" || h.key.startsWith("c")}
                            <rect
                                class="diagram-handle"
                                data-handle={h.key}
                                x={h.s.x - HANDLE_RADIUS}
                                y={h.s.y - HANDLE_RADIUS}
                                width={HANDLE_RADIUS * 2}
                                height={HANDLE_RADIUS * 2}
                                transform="rotate(45 {h.s.x} {h.s.y})"
                            />
                        {:else}
                            <circle
                                class="diagram-handle"
                                data-handle={h.key}
                                cx={h.s.x}
                                cy={h.s.y}
                                r={HANDLE_RADIUS}
                            />
                        {/if}
                    {/each}
                    <rect
                        class="diagram-pivot"
                        data-handle="pivot"
                        x={pv.x - HANDLE_RADIUS}
                        y={pv.y - HANDLE_RADIUS}
                        width={HANDLE_RADIUS * 2}
                        height={HANDLE_RADIUS * 2}
                    />
                {/if}
            {/if}
        </svg>

        <span class="diagram-hint">
            {#if creating}
                Click to place the {creating.sequence[creating.stage] === "p2"
                    ? "through point"
                    : "next point"} · Esc to cancel
            {:else if tool !== "select"}
                Click or drag to draw
            {:else if selected}
                Drag circle handles to reshape, pivot square to move
            {:else}
                Click to select
            {/if} · Space+drag to pan
        </span>
    </div>

    <div class="diagram-panel">
        <div class="diagram-panel-section">
            <div class="diagram-panel-title">
                {selected ? `Selected ${selected.kind}` : "New shapes"}
            </div>
            {#if selected?.kind === "line" || (selected?.kind === "path" && canBecomeLine(selected))}
                <button class="button is-small is-link is-light" onclick={convertSelected}>
                    {selected.kind === "line"
                        ? "Convert to bezier path"
                        : "Convert to line"}
                </button>
            {/if}
            <div class="diagram-prop">
                <label for="diagram-stroke">Color</label>
                <input
                    id="diagram-stroke"
                    type="color"
                    value={stroke}
                    oninput={(e) => setStroke(e.currentTarget.value)}
                />
            </div>
            <div class="diagram-prop">
                <label for="diagram-width">Width</label>
                <input
                    id="diagram-width"
                    class="input is-small"
                    type="number"
                    min="0.1"
                    step="0.5"
                    value={strokeWidth}
                    oninput={(e) =>
                        setStrokeWidth(parseFloat(e.currentTarget.value))}
                />
            </div>
        </div>

        <div class="diagram-panel-title">Shapes</div>
        <div class="diagram-items">
            {#if diagram}
                <!-- Topmost first, like the layers panel -->
                {#each diagram.items.slice().reverse() as it, k (it.id)}
                    {@const i = diagram.items.length - k - 1}
                    <div
                        class="diagram-item"
                        class:selected={it.id === selectedId}
                    >
                        <button
                            class="diagram-item-name"
                            disabled={it.kind === "foreign"}
                            title={it.kind === "foreign"
                                ? "Not editable, kept as-is"
                                : "Select"}
                            onclick={() => {
                                setTool("select");
                                selectedId = it.id;
                            }}
                        >
                            {#if it.kind !== "foreign"}
                                <span
                                    class="diagram-swatch"
                                    style:background={it.stroke}
                                ></span>
                            {/if}
                            {itemLabel(it)}
                        </button>
                        <IconBtn
                            icon="mdi:arrow-up"
                            class="is-ghost is-small"
                            disabled={i === diagram.items.length - 1}
                            onclick={() => moveItem(i, i + 1)}
                        />
                        <IconBtn
                            icon="mdi:arrow-down"
                            class="is-ghost is-small"
                            disabled={i === 0}
                            onclick={() => moveItem(i, i - 1)}
                        />
                        <IconBtn
                            icon="mdi:delete"
                            class="is-ghost is-small"
                            onclick={() => removeItem(it.id)}
                        />
                    </div>
                {:else}
                    <p class="has-text-grey diagram-empty">No shapes yet.</p>
                {/each}
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    :global(.diagram-editor-modal) {
        width: 95vw;
        height: 92vh;
        max-height: 92vh;
    }

    .diagram-toolbar {
        flex: none;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.4rem 0.5rem;
        border-bottom: 1px solid var(--bulma-border, #dbdbdb);
    }

    .diagram-toolbar-sep {
        width: 1px;
        align-self: stretch;
        margin: 0 0.25rem;
        background: var(--bulma-border, #dbdbdb);
    }

    .diagram-toolbar-stretch {
        flex: 1 1 auto;
    }

    .diagram-hint {
        margin-left: auto;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
        padding: 0.25rem 0.5rem;
    }

    .diagram-main {
        flex: 1 1 auto;
        display: flex;
        min-height: 0;
    }

    .diagram-canvas {
        position: relative;
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        background: #222;
        touch-action: none;
        cursor: default;

        &.drawing {
            cursor: crosshair;
        }
        &.pannable {
            cursor: grab;
        }
        &.panning {
            cursor: grabbing;
        }
    }

    .diagram-bg-layer {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0 0;
        pointer-events: none;

        img {
            width: 100%;
            height: 100%;
            max-width: none;
            max-height: none;
        }
    }

    .flipped {
        transform: scaleX(-1);
    }

    .inverted {
        filter: invert(1);
    }

    .diagram-svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    .diagram-page {
        fill: none;
        stroke: #888;
        stroke-dasharray: 4 4;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
    }

    .diagram-foreign {
        pointer-events: none;
    }

    .diagram-hit {
        fill: none;
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
    }

    .drawing .diagram-hit {
        cursor: crosshair;
    }

    .diagram-guide {
        stroke: #3273dc;
        stroke-dasharray: 3 3;
        pointer-events: none;
    }

    .diagram-handle,
    .diagram-pivot {
        fill: #fff;
        stroke: #3273dc;
        stroke-width: 2;
        cursor: move;
    }

    .diagram-message {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: #ddd;
    }

    .diagram-panel {
        flex: 0 0 240px;
        display: flex;
        flex-direction: column;
        border-left: 1px solid var(--bulma-border, #dbdbdb);
        background: var(--bulma-scheme-main, #fff);
        min-height: 0;
    }

    .diagram-panel-section {
        padding: 0.5rem;
        border-bottom: 1px solid var(--bulma-border, #dbdbdb);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .diagram-panel-title {
        font-weight: 600;
        font-size: 0.85rem;
        padding: 0.25rem 0.5rem;
        text-transform: capitalize;
    }

    .diagram-panel-section .diagram-panel-title {
        padding: 0;
    }

    .diagram-prop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: 0.8rem;

        .input {
            width: 80px;
        }
    }

    .diagram-items {
        flex: 1 1 auto;
        overflow-y: auto;
    }

    .diagram-empty {
        padding: 0.5rem;
        font-size: 0.8rem;
    }

    .diagram-item {
        display: flex;
        align-items: center;
        padding: 0 0.25rem;
        border-bottom: 1px solid var(--bulma-border, #eee);

        &.selected {
            background: var(--bulma-primary-light, rgba(50, 115, 220, 0.1));
            box-shadow: inset 2px 0 0 var(--bulma-primary, #3273dc);
        }
    }

    .diagram-item-name {
        flex: 1 1 auto;
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        background: none;
        border: none;
        padding: 0.3rem 0.25rem;
        font-size: 0.8rem;
        text-align: left;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: inherit;

        &:disabled {
            cursor: default;
            color: var(--bulma-text-weak, #888);
        }
    }

    .diagram-swatch {
        flex: none;
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: 1px solid #0003;
    }
</style>
