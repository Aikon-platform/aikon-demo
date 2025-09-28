<script lang="ts">
    import { untrack, type Snippet } from "svelte";
    import ClusterApp from "../../ClusterApp/components/ClusterApp.svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import { connectedComponents, convertToClusteringFile, graphFromSimilarityMatches, type TSimpleCluster } from "../clustering";
    import type { TSimilarityIndex, TSimilarityMatches } from "../types";
    import ClusterPreviewBlock from "./ClusterPreviewBlock.svelte";

    interface Props {
        index: TSimilarityIndex;
        matches: TSimilarityMatches[];
        visible?: boolean;
        extra_toolbar_items?: Snippet;
    }
    let { index, matches, visible, extra_toolbar_items }: Props = $props();

    let isFinal = $state(false);
    let minThreshold = $derived(Math.min(...matches.map(match => Math.min(...match.matches.map(m => m.similarity)))));
    let maxThreshold = $derived(Math.max(...matches.map(match => Math.max(...match.matches.map(m => m.similarity)))));
    // svelte-ignore state_referenced_locally
    let threshold = $state(minThreshold + 0.8*(maxThreshold-minThreshold));

    let graph = $derived(graphFromSimilarityMatches(index, matches));
    let clusters:TSimpleCluster[] = $state([]);

    $effect(() => {
        const trigger = threshold;
        untrack(() => {
            clusters = connectedComponents(graph, threshold, index.images.length);
        });
    });
        
</script>

{#if visible}
<div class="toolbar">
    <div class="toolbar-content">
        {#if extra_toolbar_items}
            {@render extra_toolbar_items()}
        {/if}
        {#if !isFinal}
            <div class="toolbar-item">
                <label class="label is-expanded" for="clustering-threshold">Clustering threshold: </label>
                <div class="field">
                    <div class="control">
                        <input
                            type="range"
                            min={minThreshold}
                            max={maxThreshold}
                            step={0.001}
                            bind:value={threshold}
                        />
                    </div>
                    <div class="control">
                        <input
                            type="number"
                            class="input"
                            bind:value={threshold}
                            id="clustering-threshold"
                        />
                    </div>
                </div>
            </div>
        {/if}
        <div class="toolbar-item toolbar-btn">
            {#if isFinal}
                <IconBtn
                    icon="mdi:autorenew"
                    onclick={() => (isFinal = false)}
                    label="Redo automatic clustering"
                />
            {:else}
                <IconBtn
                    class="is-link"
                    icon="mdi:check-bold"
                    onclick={() => (isFinal = true)}
                    label="Apply clustering"
                />
            {/if}
        </div>
    </div>
</div>
{/if}
<div class="cluster-viewer" class:viewer-table={!isFinal} class:hidden={!visible}>
    {#if isFinal}
        <ClusterApp
            clustering_data={convertToClusteringFile(index, matches, clusters)}
            editable={true}
        />
    {:else}
        <div class={"cl-cluster-list cl-display-grid"}>
            {#each clusters as cluster (cluster.id)}
                <ClusterPreviewBlock {cluster} index={index} />
            {/each}
            <div class="cl-cluster box cl-filler"></div>
            <div class="cl-cluster box cl-filler"></div>
            <div class="cl-cluster box cl-filler"></div>
            <div class="cl-cluster box cl-filler"></div>
            <div class="cl-cluster box cl-filler"></div>
        </div>
    {/if}
</div>
<div class="mt-4"></div>

<style lang="scss">
    .hidden {
        display: none;
    }
</style>