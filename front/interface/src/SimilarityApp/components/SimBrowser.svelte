<script lang="ts" module>
    export function matchesHRef(match: TImageInfo) {
        return `#match-${match.id}`;
    }
</script>

<script lang="ts">
    import type { TSimilarityIndex, TSimilarityMatches } from "../types";
    import Pagination from "../../shared/components/Pagination.svelte";
    import type { TDocument, TImageInfo } from "../../shared/types";
    import MatchRow from "./MatchRow.svelte";
    import type { Snippet } from "svelte";

    interface Props {
        index: TSimilarityIndex;
        matches: TSimilarityMatches[];
        mode?: "cluster" | "browse";
        extra_toolbar_items?: Snippet;
    }
    let { index, matches, mode, extra_toolbar_items }: Props = $props();

    let group_by_source = $state(false);
    let filter_by_source = $state<TDocument | null>(null);
    let matches_filtered = $derived(filter_by_source ? matches.filter(match => match.query.document === filter_by_source) : matches);

    let actual_page = $state(1);
    const PAGINATE_BY = 30;
    let total_pages = $derived(Math.ceil(matches.length / PAGINATE_BY));

    let minThreshold = $derived(Math.min(...matches.map(match => Math.min(...match.matches.map(m => m.similarity)))));
    let maxThreshold = $derived(Math.max(...matches.map(match => Math.max(...match.matches.map(m => m.similarity)))));
    // svelte-ignore state_referenced_locally
    let threshold = $state(minThreshold + 0.5 * (maxThreshold - minThreshold));

    let highlit = $state<string | null>(null);

    function hashChange() {
        const loc = window.location.hash;
        if (loc.startsWith("#match-")) {
            const match_id = loc.slice(7);
            highlit = match_id;
            const itemIndex = matches.findIndex(match => match.query.id === match_id);
            if (itemIndex !== -1) {
                actual_page = Math.floor(itemIndex / PAGINATE_BY) + 1;
            }
            return;
        }
        highlit = null;
        if (loc.startsWith("#page-")) {
            actual_page = parseInt(loc.slice(6));
        }
    }
    $effect(() => {
        window.addEventListener("hashchange", hashChange);
        hashChange();
        return () => {
            window.removeEventListener("hashchange", hashChange);
        };
    });
</script>

<div class="toolbar">
    <div class="toolbar-content">
        {#if extra_toolbar_items}
            {@render extra_toolbar_items()}
        {/if}
        <div class="toolbar-item">
            <label class="label is-expanded"> Similarity threshold: </label>
            <div class="field">
                <input
                    type="range"
                    min={minThreshold}
                    max={maxThreshold}
                    step={0.01}
                    bind:value={threshold}
                />
                <span class="m-3">{threshold.toPrecision(4)}</span>
            </div>
        </div>
        {#if index.sources.length > 1}
            <div class="toolbar-item">
                <label class="checkbox is-normal">
                    <input
                        type="checkbox"
                        class="checkbox mr-2"
                        name="group-by-source"
                        id="group-by-source"
                        bind:checked={group_by_source}
                    />
                    Group by source document
                </label>
            </div>
            <div class="toolbar-item">
                <label class="label"> Filter by document: </label>
                <div class="field is-narrow">
                    <div class="select is-fullwidth">
                        <select
                            bind:value={
                            () => filter_by_source?.uid || "",
                            (v) => filter_by_source = index.sources.find(source => source.uid === v) || null}
                        >
                            <option value="">All</option>
                            {#each index.sources as source (source.uid)}
                                <option value={source.uid}
                                    >{source.name || source.uid}</option
                                >
                            {/each}
                        </select>
                    </div>
                </div>
            </div>
        {/if}
    </div>
    <Pagination bind:page={actual_page} {total_pages} />
</div>
<div class="viewer-table">
    {#each matches_filtered.slice((actual_page - 1) * PAGINATE_BY, actual_page * PAGINATE_BY) as matches (matches.query.id)}
        <MatchRow
            {matches}
            {group_by_source}
            highlit={highlit == matches.query.id}
            {threshold}
        />
    {/each}
</div>
<div class="mt-4"></div>
<Pagination bind:page={actual_page} {total_pages} />
