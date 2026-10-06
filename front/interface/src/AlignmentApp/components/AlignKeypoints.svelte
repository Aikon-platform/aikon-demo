<script lang="ts">
    import Icon from "@iconify/svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import type { AlignmentState } from "../state.svelte";
    import KeypointView from "./KeypointView.svelte";

    interface Props {
        alignmentState: AlignmentState;
        target: "reference" | "selected";
    }

    let { alignmentState, target = "selected" }: Props = $props();

    const fitWarnings = $derived(
        alignmentState.images.flatMap((img) =>
            img.fitWarning ? [`${img.image.file_name}: ${img.fitWarning}`] : [],
        ),
    );

    const imageShown = $derived(
        target === "reference"
            ? 0
            : alignmentState.selected.length > 0
              ? alignmentState.selected[0]
              : 1,
    );

    let gridElement: HTMLDivElement;

    function handleHeaderWheel(event: WheelEvent) {
        event.preventDefault();
        if (gridElement) {
            gridElement.scrollTop += event.deltaY;
        }
    }

    function getSelectedImage() {
        return alignmentState.selected.length > 0
            ? alignmentState.selected[0]
            : 1;
    }

    function setSelectedImage(index: number) {
        alignmentState.selected = [index];
    }
</script>

<div class="align-keypoints">
    {#if target !== "reference"}
        <div class="align-keypoints-header" onwheel={handleHeaderWheel}>
            <div class="select">
                <select bind:value={getSelectedImage, setSelectedImage}>
                    {#each alignmentState.images.slice(1).reverse() as image, i}
                        <option value={i + 1}>{image.image.file_name}</option>
                    {/each}
                </select>
            </div>
            <IconBtn
                icon="mdi:vector-link"
                label="Sync"
                class={[
                    "is-small",
                    alignmentState.syncWithKeypoints ? "is-link" : "is-ghost",
                ]}
                onclick={() =>
                    alignmentState.setSyncWithKeypoints(
                        !alignmentState.syncWithKeypoints,
                    )}
            />
            {#if !alignmentState.syncWithKeypoints}
                <IconBtn
                    icon="mdi:update"
                    label="Align"
                    class={"is-small is-link"}
                    onclick={() => alignmentState.refit(getSelectedImage())}
                />
            {/if}
        </div>
    {/if}
    <div class="align-keypoints-grid" bind:this={gridElement}>
        <KeypointView {alignmentState} imageIndex={imageShown} />
    </div>
    <div class="align-keypoints-footer">
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
</div>

<style lang="scss">
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

    .align-keypoints-grid {
        flex: 1 1 auto;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 0.5rem;
        align-items: stretch;
        & > * {
            flex: 1 1 auto;
            min-height: 300px;
            width: 100%;
        }
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
