<script lang="ts">
  import IconBtn from "../../shared/components/IconBtn.svelte";
  import type { AlignmentState } from "../state.svelte";

  interface Props {
    alignmentState: AlignmentState;
  }

  let { alignmentState }: Props = $props();

  // TODO : allow reorder with drag&drop
  function handleDragEnter(event: DragEvent) {
    event.preventDefault();
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }
</script>

<div class="align-layers">
  <div class="align-layers-header">Layers</div>
  <div class="align-layers-list">
    {#each alignmentState.images as image, i}
      <div
        class="align-layer"
        ondragenter={handleDragEnter}
        ondragover={handleDragOver}
        role="region"
        class:selected={alignmentState.selected.includes(i)}
      >
        <IconBtn
          icon={image.visible ? "mdi:eye" : "mdi:eye-off"}
          class={["is-ghost", "is-small", "align-layer-visibility"]}
          onclick={() => (image.visible = !image.visible)}
        />
        <div class="align-layer-thumb">
          <img src={image.image.data} alt={image.image.file_name} />
        </div>
        <span class="align-layer-name" title={image.image.file_name}
          >{image.image.file_name}</span
        >
        <button
          class="is-overlay"
          onclick={() => (alignmentState.selected = [i])}
          title="Select"
          aria-label="Select {image.image.file_name}"
        ></button>
      </div>
    {/each}
    {#if alignmentState.images.length === 0}
      <p class="has-text-grey align-layers-empty">No layers yet.</p>
    {/if}
  </div>
</div>

<style>
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
  }

  .align-layer.selected {
    background: var(--bulma-primary-light, rgba(50, 115, 220, 0.1));
    box-shadow: inset 2px 0 0 var(--bulma-primary, #3273dc);
  }

  .align-layer-select {
    position: absolute;
    inset: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
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
</style>
