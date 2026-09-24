<script lang="ts">
    import type { AlignmentState, Point } from "../state.svelte";
    import {
        applyTransform,
        invertMatrix,
        matrixToCss,
        multiplyMatrix,
        scaleMatrix,
        translationMatrix,
    } from "../transform";
    import IconBtn from "../../shared/components/IconBtn.svelte";

    interface Props {
        alignmentState: AlignmentState;
        /** Index of the displayed image in alignmentState.images */
        imageIndex: number;
    }

    let { alignmentState, imageIndex }: Props = $props();

    const MIN_ZOOM = 0.2;
    const MAX_ZOOM = 50;
    const FIT_MARGIN = 0.95;
    const HIT_RADIUS = 8; // px, on screen
    const KEYPOINT_RADIUS = 5;
    const TOP_MARGIN = 36;

    const aligningImage = $derived(alignmentState.images[imageIndex]);
    const width = $derived(aligningImage.image.width);
    const height = $derived(aligningImage.image.height);

    let container: HTMLDivElement;
    let containerWidth = $state(0);
    let containerHeight = $state(0);

    $effect(() => {
        const observer = new ResizeObserver(() => {
            const rect = container.getBoundingClientRect();
            containerWidth = rect.width;
            containerHeight = rect.height - TOP_MARGIN;
        });
        observer.observe(container);
        return () => observer.disconnect();
    });

    // Zoom/pan on top of the fitted image: screen = zoom * fitPoint + pan
    let zoom = $state(1);
    let pan = $state({ x: 0, y: 0 });

    // Image pixels -> container pixels
    const view = $derived.by(() => {
        const s =
            Math.min(containerWidth / width, containerHeight / height) *
            FIT_MARGIN;
        const fit = multiplyMatrix(
            translationMatrix(
                (containerWidth - s * width) / 2,
                TOP_MARGIN + (containerHeight - s * height) / 2,
            ),
            scaleMatrix(s, s),
        );
        return multiplyMatrix(
            multiplyMatrix(
                translationMatrix(pan.x, pan.y),
                scaleMatrix(zoom, zoom),
            ),
            fit,
        );
    });
    const invView = $derived(invertMatrix(view));

    const toScreen = (p: Point) => applyTransform(view, p.x, p.y);

    function pointer(e: PointerEvent | WheelEvent): Point {
        const rect = container.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function toImage(screen: Point): Point | null {
        return invView && applyTransform(invView, screen.x, screen.y);
    }

    const inImage = (p: Point) =>
        p.x >= 0 && p.y >= 0 && p.x <= width && p.y <= height;

    const clampToImage = (p: Point) => ({
        x: Math.min(width, Math.max(0, p.x)),
        y: Math.min(height, Math.max(0, p.y)),
    });

    // Closest keypoint within HIT_RADIUS of a screen point
    function hitTest(screen: Point): number | null {
        let best: number | null = null;
        let bestDist = HIT_RADIUS;
        for (let k = 0; k < aligningImage.keypoints.length; k++) {
            const s = toScreen(aligningImage.keypoints[k]);
            const d = Math.hypot(s.x - screen.x, s.y - screen.y);
            if (d <= bestDist) {
                best = k;
                bestDist = d;
            }
        }
        return best;
    }

    function handleWheel(e: WheelEvent) {
        e.preventDefault();
        const m = pointer(e);
        const newZoom = Math.min(
            MAX_ZOOM,
            Math.max(MIN_ZOOM, zoom * Math.exp(-e.deltaY * 0.001)),
        );
        // Keep the point under the cursor fixed
        pan = {
            x: m.x - (newZoom * (m.x - pan.x)) / zoom,
            y: m.y - (newZoom * (m.y - pan.y)) / zoom,
        };
        zoom = newZoom;
    }

    function resetView() {
        zoom = 1;
        pan = { x: 0, y: 0 };
    }

    type Drag =
        | { kind: "pan"; start: Point; pan0: Point }
        | { kind: "keypoint"; k: number };
    let drag: Drag | null = $state(null);

    function clearHover() {
        if (alignmentState.hover?.image === imageIndex)
            alignmentState.hover = null;
    }

    // Update hover state (temporary keypoint, or hovered existing keypoint)
    function updateHover(e: PointerEvent) {
        const screen = pointer(e);
        const hit = hitTest(screen);
        alignmentState.activeKeypoint = hit;
        const p = toImage(screen);
        if (hit === null && !e.ctrlKey && p && inImage(p)) {
            alignmentState.hover = { image: imageIndex, point: p };
        } else {
            clearHover();
        }
    }

    function handlePointerDown(e: PointerEvent) {
        const screen = pointer(e);
        if (e.button === 1) {
            e.preventDefault();
            drag = { kind: "pan", start: screen, pan0: { ...pan } };
        } else if (e.button === 0) {
            const hit = hitTest(screen);
            if (e.ctrlKey) {
                if (hit !== null) alignmentState.removeKeypoint(hit);
                return;
            }
            if (e.shiftKey && hit !== null) {
                alignmentState.toggleKeypoint(imageIndex, hit);
                return;
            }
            let k = hit;
            if (k === null) {
                const p = toImage(screen);
                if (!p || !inImage(p)) return;
                k = alignmentState.addKeypoint(imageIndex, p);
            }
            drag = { kind: "keypoint", k };
            alignmentState.activeKeypoint = k;
            e.preventDefault();
            clearHover();
        } else {
            return;
        }
        container.setPointerCapture(e.pointerId);
    }

    function handlePointerMove(e: PointerEvent) {
        if (!drag) {
            updateHover(e);
            return;
        }
        const screen = pointer(e);
        if (drag.kind === "pan") {
            pan = {
                x: drag.pan0.x + screen.x - drag.start.x,
                y: drag.pan0.y + screen.y - drag.start.y,
            };
        } else {
            const p = toImage(screen);
            if (p)
                alignmentState.moveKeypoint(
                    imageIndex,
                    drag.k,
                    clampToImage(p),
                );
        }
    }

    function handlePointerUp(e: PointerEvent) {
        if (!drag) return;
        drag = null;
        container.releasePointerCapture(e.pointerId);
        updateHover(e);
    }

    function handlePointerLeave() {
        if (drag) return;
        clearHover();
        alignmentState.activeKeypoint = null;
    }

    // Temporary keypoint, from this image or warped from the hovered one
    const hoverScreen = $derived.by(() => {
        const hover = alignmentState.hover;
        if (!hover || !alignmentState.images[hover.image]) return null;
        return toScreen(
            alignmentState.warpPoint(hover.image, imageIndex, hover.point),
        );
    });

    // Distinct hue per keypoint index, matching across all views
    const keypointColor = (k: number) => `hsl(${(k * 137.5) % 360}, 90%, 55%)`;
</script>

<div class="keypoint-view" class:hidden-layer={!aligningImage.visible}>
    <div
        bind:this={container}
        class="keypoint-view-canvas"
        class:panning={drag?.kind === "pan"}
        onwheel={handleWheel}
        onpointerdown={handlePointerDown}
        onpointermove={handlePointerMove}
        onpointerup={handlePointerUp}
        onpointercancel={handlePointerUp}
        onpointerleave={handlePointerLeave}
        role="application"
    >
        <div class="img-wrapper"
            style:transform={matrixToCss(view)}>
        <img
            src={aligningImage.image.data}
            alt={aligningImage.image.file_name}
            {width}
            {height}
            class:flipped={aligningImage.hFlip}
        />
        </div>
        <svg class="keypoint-overlay">
            {#each aligningImage.keypoints as kp, k}
                {@const s = toScreen(kp)}
                <g
                    class="keypoint"
                    class:active={alignmentState.activeKeypoint === k}
                    class:disabled={kp.disabled}
                    transform="translate({s.x} {s.y})"
                    style="--kp-color: {keypointColor(k)}"
                >
                    <circle r={KEYPOINT_RADIUS} />
                    <text x={KEYPOINT_RADIUS + 3} y={-KEYPOINT_RADIUS - 2}
                        >{k + 1}</text
                    >
                </g>
            {/each}
            {#if hoverScreen}
                <g
                    class="keypoint temporary"
                    transform="translate({hoverScreen.x} {hoverScreen.y})"
                >
                    <circle r={KEYPOINT_RADIUS} />
                    <line x1="-9" y1="0" x2="9" y2="0" />
                    <line x1="0" y1="-9" x2="0" y2="9" />
                </g>
            {/if}
        </svg>
    </div>
    <div class="keypoint-view-header">
        <span class="keypoint-view-name" title={aligningImage.image.file_name}>
            {#if imageIndex === 0}<b>Ref.</b>{/if}
            {aligningImage.image.file_name}
        </span>
        <IconBtn
            icon="mdi:fit-to-page-outline"
            class="is-ghost is-small"
            onclick={resetView}
        />
    </div>
</div>

<style>
    .keypoint-view {
        position: relative;
        height: 100%;
        min-height: 0;
        background: #222;
        border-radius: var(--bulma-radius, 4px);
        overflow: hidden;
    }

    .keypoint-view.hidden-layer {
        opacity: 0.6;
    }

    .keypoint-view-canvas {
        position: absolute;
        inset: 0;
        overflow: hidden;
        touch-action: none;
        cursor: crosshair;
    }

    .keypoint-view-canvas.panning {
        cursor: grabbing;
    }

    .keypoint-view-canvas .img-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0 0;
        max-width: none;
        max-height: none;
        pointer-events: none;
        user-select: none;
    }

    .keypoint-overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
        pointer-events: none;
    }

    .keypoint circle {
        fill: color-mix(in srgb, var(--kp-color) 35%, transparent);
        stroke: var(--kp-color);
        stroke-width: 2;
    }

    .keypoint text {
        fill: var(--kp-color);
        font-size: 11px;
        font-weight: 600;
        paint-order: stroke;
        stroke: #000;
        stroke-width: 2.5;
    }

    .keypoint.active circle {
        stroke: #fff;
        stroke-width: 3;
    }

    .keypoint.disabled {
        opacity: 0.5;
    }

    .keypoint.temporary circle {
        fill: none;
        stroke: #fff;
        stroke-width: 1.5;
        stroke-dasharray: 3 2;
    }

    .keypoint.temporary line {
        stroke: #fff;
        stroke-width: 1;
    }

    .keypoint-view-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0 0 0 0.5rem;
        background: rgba(30, 30, 30, 0.75);
        color: #fff;
        font-size: 0.75rem;
    }

    .keypoint-view-name {
        flex: 1 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .flipped {
        transform: scaleX(-1);
        transform-origin: center;
    }
</style>
