<script lang="ts">
    import { untrack } from "svelte";
    import type { AlignmentState, Point } from "../state.svelte";
    import {
        applyTransform,
        invertMatrix,
        type TransformMatrix,
    } from "../transform";

    interface Props {
        alignmentState: AlignmentState;
        /** Index of the edited image in alignmentState.images */
        imageIndex: number;
        ghostMode?: boolean;
        /** Image pixels -> overlay (container) pixels */
        matrix: TransformMatrix;
        /** When false, pointer events pass through to the container */
        enabled?: boolean;
        onDragStart?: () => void;
        onDragEnd?: () => void;
    }

    let {
        alignmentState,
        imageIndex,
        ghostMode,
        matrix,
        enabled = true,
        onDragStart,
        onDragEnd,
    }: Props = $props();

    const HIT_RADIUS = 8; // px, on screen
    const KEYPOINT_RADIUS = 5;

    const aligningImage = $derived(alignmentState.images[imageIndex]);
    const width = $derived(aligningImage.image.width);
    const height = $derived(aligningImage.image.height);

    let svg: SVGSVGElement;

    const invMatrix = $derived(invertMatrix(matrix));

    const toScreen = (p: Point) => applyTransform(matrix, p.x, p.y);

    function pointer(e: PointerEvent): Point {
        const rect = svg.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function toImage(screen: Point): Point | null {
        return invMatrix && applyTransform(invMatrix, screen.x, screen.y);
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

    /** Index of the keypoint being dragged */
    let dragged: number | null = $state(null);

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
        // Other buttons (e.g. middle-drag pan) are left to the container
        if (e.button !== 0) return;
        const screen = pointer(e);
        const hit = hitTest(screen);
        e.preventDefault();
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
        dragged = k;
        alignmentState.activeKeypoint = k;
        clearHover();
        svg.setPointerCapture(e.pointerId);
        onDragStart?.();
    }

    function handlePointerMove(e: PointerEvent) {
        if (dragged === null) {
            updateHover(e);
            return;
        }
        const p = toImage(pointer(e));
        if (p)
            alignmentState.moveKeypoint(imageIndex, dragged, clampToImage(p));
    }

    function handlePointerUp(e: PointerEvent) {
        if (dragged === null) return;
        dragged = null;
        svg.releasePointerCapture(e.pointerId);
        onDragEnd?.();
        updateHover(e);
    }

    function handlePointerLeave() {
        if (dragged !== null) return;
        clearHover();
        alignmentState.activeKeypoint = null;
    }

    // Stop hovering when disabled or unmounted (e.g. tool switch)
    $effect(() => {
        if (!enabled) untrack(clearHover);
    });
    $effect(() => () => clearHover());

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

    const ghostKeypoints = $derived.by(() => {
        if (!ghostMode) return [];
        return alignmentState.images.map((tg, tgIndex) =>
            tg.keypoints.map((p) =>
                alignmentState.warpPoint(tgIndex, imageIndex, p),
            ),
        );
    });
</script>

<svg
    bind:this={svg}
    class="keypoint-overlay"
    class:enabled
    role="application"
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onpointercancel={handlePointerUp}
    onpointerleave={handlePointerLeave}
>
    {#each ghostKeypoints as kps}
        {#each kps as kp, k}
            {#if !kp.disabled}
                {@const s = toScreen(kp)}
                {@const t = toScreen(aligningImage.keypoints[k])}
                <g
                    class="keypoint ghost"
                    style="--kp-color: {keypointColor(k)}"
                >
                    <circle r={KEYPOINT_RADIUS * 0.5} cx={s.x} cy={s.y} />
                    <line x1={s.x} y1={s.y} x2={t.x} y2={t.y} />
                </g>
            {/if}
        {/each}
    {/each}
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
            <text x={KEYPOINT_RADIUS + 3} y={-KEYPOINT_RADIUS - 2}>{k + 1}</text
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

<style>
    .keypoint-overlay {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: visible;
        touch-action: none;
        pointer-events: none;
    }

    .keypoint-overlay.enabled {
        pointer-events: all;
        cursor: crosshair;
    }

    .keypoint circle {
        fill: color-mix(in srgb, var(--kp-color) 35%, transparent);
        stroke: var(--kp-color);
        stroke-width: 2;
    }

    .keypoint line {
        stroke: var(--kp-color);
        stroke-width: 2;
    }

    .keypoint.ghost {
        opacity: 0.5;
    }

    .keypoint text {
        fill: var(--kp-color);
        font-size: 16px;
        font-weight: 600;
        paint-order: stroke;
        stroke: #000;
        stroke-width: 5;
        user-select: none;
    }

    .keypoint.active circle {
        stroke: #fff;
        stroke-width: 3;
    }

    .keypoint.disabled {
        opacity: 0.5;
    }

    .keypoint.temporary {
        opacity: 0.4;
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
</style>
