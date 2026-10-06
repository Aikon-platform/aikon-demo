<script lang="ts">
    import type { AlignmentState, Point } from "../state.svelte";
    import {
        matrixToCss,
        multiplyMatrix,
        scaleMatrix,
        translationMatrix,
    } from "../transform";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import KeypointOverlay from "./KeypointOverlay.svelte";

    interface Props {
        alignmentState: AlignmentState;
        /** Index of the displayed image in alignmentState.images */
        imageIndex: number;
    }

    let { alignmentState, imageIndex }: Props = $props();

    const MIN_ZOOM = 0.2;
    const MAX_ZOOM = 50;
    const FIT_MARGIN = 0.95;
    const TOP_MARGIN = 0;

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

    function pointer(e: PointerEvent | WheelEvent): Point {
        const rect = container.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
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

    // Middle-drag pan; left clicks are handled by the keypoint overlay
    let panDrag: { start: Point; pan0: Point } | null = $state(null);

    function handlePointerDown(e: PointerEvent) {
        if (e.button !== 1) return;
        e.preventDefault();
        panDrag = { start: pointer(e), pan0: { ...pan } };
        container.setPointerCapture(e.pointerId);
    }

    function handlePointerMove(e: PointerEvent) {
        if (!panDrag) return;
        const screen = pointer(e);
        pan = {
            x: panDrag.pan0.x + screen.x - panDrag.start.x,
            y: panDrag.pan0.y + screen.y - panDrag.start.y,
        };
    }

    function handlePointerUp(e: PointerEvent) {
        if (!panDrag) return;
        panDrag = null;
        container.releasePointerCapture(e.pointerId);
    }
</script>

<div class="keypoint-view">
    <div
        bind:this={container}
        class="keypoint-view-canvas"
        class:panning={panDrag}
        onwheel={handleWheel}
        onpointerdown={handlePointerDown}
        onpointermove={handlePointerMove}
        onpointerup={handlePointerUp}
        onpointercancel={handlePointerUp}
        role="application"
    >
        <div class="img-wrapper" style:transform={matrixToCss(view)}>
            <img
                src={aligningImage.image.data}
                alt={aligningImage.image.file_name}
                {width}
                {height}
                class:flipped={aligningImage.hFlip}
            />
        </div>
        <KeypointOverlay
            {alignmentState}
            {imageIndex}
            matrix={view}
            enabled={!panDrag}
        />
    </div>
    <div class="keypoint-view-header">
        <IconBtn
            icon="mdi:fit-to-page-outline"
            class="is-ghost is-white is-small"
            onclick={resetView}
        />
    </div>
</div>

<style lang="scss">
    .keypoint-view {
        position: relative;
        height: 100%;
        min-height: 0;
        background: #222;
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
        img {
            max-width: unset;
            max-height: unset;
        }
    }

    .keypoint-view-header {
        position: absolute;
        right: 0.25rem;
        top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: rgba(30, 30, 30, 0.75);
        border-radius: var(--bulma-radius, 4px);
        padding: 0.25rem;
        color: #fff;
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
