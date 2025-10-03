<script lang="ts">
    import type { TClusterImageInfo } from "../types";
    import { getEditorState } from "../state.svelte";
    import ImageFileDisplay from "../../shared/components/ImageFileDisplay.svelte";

    interface Props {
        images: TClusterImageInfo[];
        limit?: number;
        dti_transformed: boolean;
        selectable: boolean;
        expanded: boolean;
        disable_all?: boolean;
        onexpand?: () => void;
    }
    let {
        images,
        limit,
        dti_transformed,
        selectable = false,
        expanded = $bindable(false),
        disable_all,
        onexpand,
    }: Props = $props();

    let editor_state = getEditorState();

    function toggleSelection(image: TClusterImageInfo) {
        editor_state.select_images("toggle", image);
    }
</script>

<div class="cl-images" class:cl-selectable={selectable}>
    {#each images.slice(0, limit) as image (image.id)}
        <div
            class="cl-image card"
            class:cl-selected={selectable && editor_state.image_selection.has(image.id)}
        >
            <ImageFileDisplay
                image={{
                    ...image,
                    id: image.num.toString(),
                    url:
                        (editor_state.base_url || "") +
                        (dti_transformed && image.tsf_url ? image.tsf_url : image.url),
                }}
                disable_magnify={selectable}
                disable_all={disable_all}
            />

            {#if selectable}
                <a
                    href="javascript:void(0)"
                    class="cl-selecter"
                    onclick={() => toggleSelection(image)}
                    aria-label="Select image"
                ></a>
            {/if}
        </div>
    {:else}
        <p>∅</p>
    {/each}
    {#if selectable && limit && images.length > limit}
        <a
            class="cl-more card cl-placeholder"
            href="javascript:void(0)"
            onclick={() => {
                expanded = !expanded;
                expanded && onexpand?.();
            }}
        >
            {expanded ? "–" : "+"}{images.length - limit}
        </a>
    {/if}
</div>
