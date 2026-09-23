<script lang="ts">
  import { AlignmentState } from "../state.svelte";
  import AlignCandidates from "./AlignCandidates.svelte";
  import AlignCanvas from "./AlignCanvas.svelte";
  import AlignKeypoints from "./AlignKeypoints.svelte";
  import AlignLayers from "./AlignLayers.svelte";
  import IconBtn from "../../shared/components/IconBtn.svelte";

  const alignmentState = new AlignmentState();

  // Open the candidates modal by default so the user picks images first;
  // it can be reopened at any time from the toolbar.
  let showCandidates = $state(true);
  let showKeypoints = $state(true);
</script>

<div class="alignment-app-root">
  <div class="alignment-toolbar">
    <IconBtn
      icon="mdi:image-plus"
      label="Add images"
      class="is-link is-light"
      onclick={() => (showCandidates = true)}
    />
    <IconBtn
      icon="mdi:vector-point"
      label="Keypoints"
      class={["is-link", showKeypoints ? "" : "is-light"]}
      onclick={() => (showKeypoints = !showKeypoints)}
    />
  </div>

  <div class="alignment-layout">
    <div class="alignment-sidebar">
      <AlignLayers {alignmentState} />
    </div>
    <div class="alignment-main">
      <AlignCanvas {alignmentState} />
    </div>
    {#if showKeypoints}
      <div class="alignment-keypoints">
        <AlignKeypoints {alignmentState} />
      </div>
    {/if}
  </div>
</div>

<AlignCandidates
  {alignmentState}
  bind:open={showCandidates}
  onClose={() => (showCandidates = false)}
/>

<style>
  .alignment-app-root {
    display: flex;
    flex-direction: column;
    height: 88vh;
    min-height: 500px;
    width: 100%;
  }

  .alignment-toolbar {
    flex: none;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
  }

  .alignment-layout {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    min-height: 0;
    border: 1px solid var(--bulma-border, #dbdbdb);
    border-radius: var(--bulma-radius-large, 6px);
    overflow: hidden;
  }

  .alignment-sidebar {
    flex: 0 0 260px;
    width: 260px;
    min-width: 260px;
    height: 100%;
    overflow: hidden;
    border-right: 1px solid var(--bulma-border, #dbdbdb);
    background: var(--bulma-scheme-main, #fff);
  }

  .alignment-main {
    flex: 1 1 auto;
    height: 100%;
    min-width: 0;
  }

  .alignment-keypoints {
    flex: 0 0 40%;
    min-width: 260px;
    height: 100%;
    overflow: hidden;
    border-left: 1px solid var(--bulma-border, #dbdbdb);
    background: var(--bulma-scheme-main, #fff);
  }

  :global(.aligner-viewer) {
    width: 100%;
  }
</style>
