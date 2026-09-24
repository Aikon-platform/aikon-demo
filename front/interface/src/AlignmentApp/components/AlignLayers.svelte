<script lang="ts">
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import type { AlignmentState, AligningImage } from "../state.svelte";
    import { identityMatrix, initialMatrix } from "../transform";

    interface Props {
        alignmentState: AlignmentState;
    }

    let { alignmentState }: Props = $props();

    let draggedIndex: number | null = $state(null);
    let dragOverIndex: number | null = $state(null);
    let opacityInput: HTMLInputElement;

    const selectedImages = $derived(
        alignmentState.selected
            .map((i) => alignmentState.images[i])
            .filter(Boolean) as AligningImage[],
    );

    // Check if transforms can be reset
    const canResetTransforms = $derived(alignmentState.selected.length > 0);

    function handleDragStart(event: DragEvent, index: number) {
        draggedIndex = index;
        event.dataTransfer?.setData("text/plain", index.toString());
        event.dataTransfer!.effectAllowed = "move";
    }

    function handleDragEnter(event: DragEvent, index: number) {
        event.preventDefault();
        if (draggedIndex !== null && draggedIndex !== index) {
            dragOverIndex = index;
            event.dataTransfer!.dropEffect = "move";
        }
    }

    function handleDragOver(event: DragEvent, index: number) {
        event.preventDefault();
        if (draggedIndex !== null && draggedIndex !== index) {
            dragOverIndex = index;
            event.dataTransfer!.dropEffect = "move";
        }
    }

    function handleDragLeave(event: DragEvent, index: number) {
        event.preventDefault();
        if (dragOverIndex === index) {
            dragOverIndex = null;
        }
    }

    function handleDrop(event: DragEvent, targetIndex: number) {
        event.preventDefault();
        if (draggedIndex === null || draggedIndex === targetIndex) return;

        // Reorder the images array
        const images = [...alignmentState.images];
        const [removed] = images.splice(draggedIndex, 1);
        images.splice(targetIndex, 0, removed);
        alignmentState.images = images;
        // The first layer is the keypoint fit reference
        alignmentState.resync();

        // Update selection to match the new index
        const selectedIndices = [targetIndex];
        alignmentState.selected = selectedIndices;

        draggedIndex = null;
        dragOverIndex = null;
    }

    function handleDragEnd() {
        draggedIndex = null;
        dragOverIndex = null;
    }

    function toggleVisible(index: number) {
        const img = alignmentState.images[index];
        img.visible = !img.visible;
        if (img.visible && alignmentState.selected.length === 0) {
            alignmentState.selected = [index];
        }
    }

    function resetTransforms() {
        for (const index of alignmentState.selected) {
            const img = alignmentState.images[index];
            if (img) {
                img.transform = initialMatrix(
                    img.image.width,
                    img.image.height,
                );
                if (
                    alignmentState.syncWithKeypoints &&
                    alignmentState.images[0]
                ) {
                    const ref = alignmentState.images[0];
                    img.keypoints = ref.keypoints.map((p) =>
                        alignmentState.warpPoint(0, index, p),
                    );
                }
            }
        }
        alignmentState.resync();
    }

    function setOpacity(value: number) {
        const opacity = Math.min(1, Math.max(0, parseFloat(value.toString())));
        for (const index of alignmentState.selected) {
            const img = alignmentState.images[index];
            if (img) {
                img.opacity = opacity;
            }
        }
    }

    function syncOpacityFromInput() {
        if (opacityInput && !isNaN(parseFloat(opacityInput.value))) {
            setOpacity(parseFloat(opacityInput.value));
        }
    }

    let reversedImages = $derived(alignmentState.images.slice().reverse());
</script>

<div class="align-layers">
    <div class="align-layers-header">Layers</div>
    <div class="align-layers-list">
        {#each reversedImages as image, j}
            {@const i = reversedImages.length - j - 1}
            <div
                class="align-layer"
                class:selected={alignmentState.selected.includes(i)}
                class:hidden={!image.visible}
                class:dragging={draggedIndex === i}
                class:drag-over={dragOverIndex === i}
                class:drag-over-post={dragOverIndex === i && draggedIndex! > i}
                class:first={i === 0}
                draggable="true"
                ondragstart={(e) => handleDragStart(e, i)}
                ondragenter={(e) => handleDragEnter(e, i)}
                ondragover={(e) => handleDragOver(e, i)}
                ondragleave={(e) => handleDragLeave(e, i)}
                ondrop={(e) => handleDrop(e, i)}
                ondragend={handleDragEnd}
                role="region"
            >
                {#if i === 0}
                    <span class="align-layer-ref">Reference</span>
                {/if}
                <IconBtn
                    icon={image.visible ? "mdi:eye" : "mdi:eye-off"}
                    class="is-ghost is-small align-layer-visibility"
                    onclick={() => toggleVisible(i)}
                />
                <div class="align-layer-thumb">
                    <img src={image.image.data} alt={image.image.file_name} />
                </div>
                <span class="align-layer-name" title={image.image.file_name}
                    >{image.image.file_name}</span
                >
                <button
                    class="align-layer-overlay is-overlay"
                    onclick={() => (alignmentState.selected = [i])}
                    title="Select image"
                    aria-label="Select {image.image.file_name}"
                ></button>
            </div>
        {/each}
        {#if alignmentState.images.length === 0}
            <p class="has-text-grey align-layers-empty">No layers yet.</p>
        {/if}
    </div>

    {#if selectedImages.length > 0}
        <div class="align-layers-properties">
            {#if alignmentState.selected.length === 1}
                {@const image =
                    alignmentState.images[alignmentState.selected[0]]}
                {#if alignmentState.selected[0] !== 0}
                    <div class="property-group">
                        <label class="property-label">Opacity</label>
                        <div class="property-controls">
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                bind:value={
                                    alignmentState.images[
                                        alignmentState.selected[0]
                                    ].opacity
                                }
                                class="opacity-slider"
                            />
                            <input
                                type="number"
                                min="0"
                                max="1"
                                step="0.01"
                                bind:this={opacityInput}
                                value={image.opacity.toFixed(2)}
                                onblur={syncOpacityFromInput}
                                onchange={syncOpacityFromInput}
                                class="opacity-input"
                            />
                        </div>
                    </div>
                {/if}
                <div class="property-group">
                    <IconBtn
                        icon="mdi:invert-colors"
                        label="Invert colors"
                        class={[
                            "is-small",
                            image.invertColors ? "is-link" : "is-ghost",
                        ]}
                        onclick={() =>
                            (image.invertColors = !image.invertColors)}
                    />
                    <IconBtn
                        icon="mdi:flip-horizontal"
                        label="Flip"
                        class={[
                            "is-small",
                            image.hFlip ? "is-link" : "is-ghost",
                        ]}
                        onclick={() =>
                            (image.hFlip = !image.hFlip)}
                    />
                </div>
            {/if}
            {#if canResetTransforms}
                <div class="property-group reset-group">
                    <IconBtn
                        icon="mdi:undo"
                        class="is-ghost is-small"
                        onclick={resetTransforms}
                        label="Reset layer's transform"
                    />
                </div>
            {/if}
        </div>
    {/if}
</div>

<style lang="scss">
    .align-layers {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    .align-layers-header {
        flex: none;
        padding: 0.5rem 0.75rem;
        font-weight: 600;
        font-size: 0.85rem;
        border-bottom: 1px solid var(--bulma-border, #dbdbdb);
    }

    .align-layers-list {
        flex: 1 1 auto;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }

    .align-layers-empty {
        padding: 0.75rem;
        font-size: 0.85rem;
    }

    .align-layer {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4rem 0.5rem;
        border-bottom: 1px solid var(--bulma-border, #eee);
        cursor: grab;

        &.hidden {
            opacity: 0.5;
        }

        &.first {
            border-top: 2px solid var(--bulma-border, #eee);
        }
    }

    .align-layer-ref {
        position: absolute;
        top: 0rem;
        right: 0.5rem;
        font-size: 0.7rem;
        color: var(--bulma-text-weak, #666);
    }

    .align-layer.selected {
        background: var(--bulma-primary-light, rgba(50, 115, 220, 0.1));
        box-shadow: inset 2px 0 0 var(--bulma-primary, #3273dc);
    }

    .align-layer.dragging {
        opacity: 0.5;
        background: var(--bulma-primary-light, rgba(50, 115, 220, 0.2));
    }

    .align-layer.drag-over {
        background: var(--bulma-primary-light, rgba(50, 115, 220, 0.08));
        &.drag-over-post {
            border-bottom: 2px solid var(--bulma-primary, #3273dc);
        }
        &:not(.drag-over-post) {
            border-top: 2px solid var(--bulma-primary, #3273dc);
        }
    }

    .align-layer-overlay {
        opacity: 0;
    }

    .align-layer :global(.align-layer-visibility) {
        position: relative;
        z-index: 1;
        flex: none;
    }

    .align-layer-thumb {
        position: relative;
        flex: none;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bulma-scheme-main-bis, #f5f5f5);
        border-radius: var(--bulma-radius-small, 3px);
        overflow: hidden;
    }

    .align-layer-thumb img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        pointer-events: none;
    }

    .align-layer-name {
        position: relative;
        flex: 1 1 auto;
        min-width: 0;
        font-size: 0.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .align-layers-properties {
        flex: none;
        padding: 0.5rem;
        border-top: 1px solid var(--bulma-border, #dbdbdb);
        background: var(--bulma-scheme-main-bis, #f5f5f5);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .property-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-between;
    }

    .property-label {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--bulma-text, #363636);
    }

    .property-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .opacity-slider {
        flex: 1;
        min-width: 80px;
    }

    .opacity-input {
        width: 60px;
        padding: 0.25rem;
        border: 1px solid var(--bulma-border, #dbdbdb);
        border-radius: var(--bulma-radius-small, 3px);
        font-size: 0.75rem;
        text-align: center;
    }

    .opacity-input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .reset-group {
        justify-content: flex-start;
        gap: 0.5rem;
    }
</style>
