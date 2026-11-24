<script lang="ts">
    import { untrack } from "svelte";
    import ImageFileDisplay from "../../shared/components/ImageFileDisplay.svelte";
    import ImageInfos from "../../shared/components/ImageInfos.svelte";
    import type { TSimilarityMatches } from "../types";
    import MatchCSVExporter from "./MatchCSVExporter.svelte";
    import MatchGroup from "./MatchGroup.svelte";
    import AlignFromMatchesModal from "./AlignFromMatchesModal.svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";

    interface Props {
        matches: TSimilarityMatches;
        group_by_source: boolean;
        highlit?: boolean;
        threshold?: number;
    }
    const { matches, group_by_source, highlit, threshold }: Props = $props();
    const groups = $derived(
        group_by_source
            ? matches.matches_by_document
            : matches.matches.map((m) => [m]),
    );
    let showAll = $state(false);
    let scrollRef = $state<HTMLElement | null>(null);
    let alignInit = $state(false);
    let showAlignModal = $state(false);

    function scrollToHighlit() {
        setTimeout(() => {
            if (scrollRef) {
                scrollRef.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }, 500);
    }

    $effect(() => {
        if (highlit) {
            untrack(scrollToHighlit);
        }
    });
</script>

<div class="match-row columns" class:highlit bind:this={scrollRef}>
    <div class="column match-query">
        <ImageInfos image={matches.query} />
        <div class="columns is-multiline match-items is-centered">
            <ImageFileDisplay image={matches.query} disable_pin />
        </div>
        {#if groups.length > 5}
            <p>
                <a
                    href="javascript:void(0)"
                    onclick={() => (showAll = !showAll)}
                >
                    {showAll ? "Show only 5 best" : `Show all results`}
                </a>
            </p>
        {/if}
        <MatchCSVExporter {matches} {threshold} />

        <IconBtn
            icon="mdi:vector-arrange-above"
            onclick={() => (alignInit = true, showAlignModal = true)}
            label="Align images"
            class="is-small is-link"
        />
    </div>
    <div class="column columns match-results">
        {#each groups.slice(0, showAll ? groups.length : 5) as grouped_by_source}
            <MatchGroup
                matches={grouped_by_source}
                grouped={group_by_source}
                {threshold}
                wref={matches.query}
            />
        {/each}
    </div>
</div>

{#if alignInit}
    <AlignFromMatchesModal
        {matches}
        bind:open={showAlignModal}
        onClose={() => (showAlignModal = false)}
        {threshold}
    />
{/if}
