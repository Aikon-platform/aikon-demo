<script lang="ts">
  import type { AlignmentState } from "../state.svelte";
  import KeypointView from "./KeypointView.svelte";

  interface Props {
    alignmentState: AlignmentState;
  }

  let { alignmentState }: Props = $props();

  const keypointCount = $derived(alignmentState.images[0]?.keypoints.length ?? 0);
</script>

<div class="align-keypoints">
  <div class="align-keypoints-header">
    Keypoints ({keypointCount})
    <span class="align-keypoints-help">
      click: add / drag · ctrl+click: remove · shift+click: disable ⋅ middle-drag: pan · wheel: zoom
    </span>
  </div>
  <div class="align-keypoints-grid">
    {#each alignmentState.images as _, index (alignmentState.images[index])}
      <KeypointView {alignmentState} imageIndex={index} />
    {/each}
    {#if alignmentState.images.length === 0}
      <p class="has-text-grey align-keypoints-empty">No layers yet.</p>
    {/if}
  </div>
</div>

<style>
  .align-keypoints {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .align-keypoints-header {
    flex: none;
    padding: 0.5rem 0.75rem;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 1px solid var(--bulma-border, #dbdbdb);
  }

  .align-keypoints-help {
    display: block;
    font-weight: normal;
    font-size: 0.7rem;
    color: var(--bulma-text-weak, #666);
  }

  .align-keypoints-grid {
    flex: 1 1 auto;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-auto-rows: 260px;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .align-keypoints-empty {
    font-size: 0.85rem;
  }
</style>
