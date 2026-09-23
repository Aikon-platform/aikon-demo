<script lang="ts">
  import Icon from "@iconify/svelte";
  import IconBtn from "../../shared/components/IconBtn.svelte";
  import type { AlignmentState } from "../state.svelte";
  import KeypointView from "./KeypointView.svelte";

  interface Props {
    alignmentState: AlignmentState;
  }

  let { alignmentState }: Props = $props();

  const keypointCount = $derived(alignmentState.images[0]?.keypoints.length ?? 0);

  const fitWarnings = $derived(
    alignmentState.images.flatMap((img) =>
      img.fitWarning ? [`${img.image.file_name}: ${img.fitWarning}`] : [],
    ),
  );

  let gridElement: HTMLDivElement;

  function handleHeaderWheel(event: WheelEvent) {
    event.preventDefault();
    if (gridElement) {
      gridElement.scrollTop += event.deltaY;
    }
  }
</script>

<div class="align-keypoints">
  <div class="align-keypoints-header" on:wheel={handleHeaderWheel}>
    Keypoints ({keypointCount})

    <IconBtn
      icon="mdi:vector-link"
      label="Sync"
      class={[
        "is-small",
        alignmentState.syncWithKeypoints ? "is-link" : "is-ghost",
      ]}
      onclick={() =>
        alignmentState.setSyncWithKeypoints(!alignmentState.syncWithKeypoints)}
    />

    {#if fitWarnings.length}
      <span class="fit-warning" title={fitWarnings.join("\n")}>
        <Icon icon="mdi:alert" />
        <span class="fit-warning-text">
          {fitWarnings.length === 1
            ? fitWarnings[0]
            : `${fitWarnings.length} fits rejected`}
        </span>
      </span>
    {/if}
  </div>
  <div class="align-keypoints-grid" bind:this={gridElement}>
    {#each alignmentState.images as _, index (alignmentState.images[index])}
      <KeypointView {alignmentState} imageIndex={index} />
    {/each}
    {#if alignmentState.images.length === 0}
      <p class="has-text-grey align-keypoints-empty">No layers yet.</p>
    {/if}
  </div>

    <div class="align-keypoints-help">
      click: add / drag · ctrl+click: remove · shift+click: disable ⋅ middle-drag: pan · wheel: zoom
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
    padding: 0.5rem 0.75rem;
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
    padding-right: 1.5rem;
  }

  .align-keypoints-empty {
    font-size: 0.85rem;
  }

  .fit-warning {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    max-width: 20rem;
    font-size: 0.75rem;
    color: var(--bulma-danger, #f14668);
  }

  .fit-warning-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
