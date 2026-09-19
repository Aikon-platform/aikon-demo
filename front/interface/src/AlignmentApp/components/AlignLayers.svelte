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

  $inspect(alignmentState.selected);
</script>

<div class="align-layers">
  {#each alignmentState.images as image, i}
    <div
      class="align-layer is-relative"
      ondragenter={handleDragEnter}
      ondragover={handleDragOver}
      role="region"
      class:selected={alignmentState.selected.includes(i)}
    >
      <button
        class="is-overlay"
        onclick={() => (alignmentState.selected = [i])}
        title="Select"
        aria-label="Select"
      ></button>
      <IconBtn
        icon="mdi:eye"
        class={["is-link", "is-small", image.visible ? "" : "is-light"]}
        onclick={() => (image.visible = !image.visible)}
      />
      <div class="align-layer-image">
        <img src={image.image.data} alt="Image {i}" />
      </div>
      <span>{image.image.file_name}</span>
    </div>
  {/each}
</div>

<style lang="scss">
  .align-layers {
    display: flex;
    flex-direction: column;
  }

  .align-layer {
    display: flex;
    flex-direction: row;
    &.selected {
      outline: 2px solid var(--bulma-primary);
    }
  }
  .align-layer-image {
    width: 1em;
    height: 1em;
    img {
      width: auto;
      height: auto;
      max-width: 1em;
      max-height: 1em;
    }
  }
</style>
