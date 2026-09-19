<script lang="ts">
  import { AlignmentState } from "../state.svelte";
  import AlignCandidates from "./AlignCandidates.svelte";
  import AlignCanvas from "./AlignCanvas.svelte";
  import AlignLayers from "./AlignLayers.svelte";

  const alignmentState = new AlignmentState();

  let showCandidates = $state(true);
</script>

{#if showCandidates}
  <AlignCandidates {alignmentState} onClose={() => (showCandidates = false)} />
{/if}

<div class="alignment-layout columns">
    <div class="column is-2">
        <AlignLayers {alignmentState} />
    </div>
    <div class="column is-10">
        <AlignCanvas {alignmentState} />
    </div>
</div>

<style>
    .alignment-layout {
        height: 100%;
        width: 100%;
    }
    :global(.aligner-viewer) {
        width: 100%;
    }
</style>