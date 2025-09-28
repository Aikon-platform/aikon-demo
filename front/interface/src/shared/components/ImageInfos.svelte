<script lang="ts">
    import { ellipsis } from "../utils";
    import type { TImageInfo } from "../types";
    import { getNameProvider } from "../naming.svelte";
    import { getContext } from "svelte";

    interface Props {
        image: TImageInfo;
        isTitle?: boolean;
        prefix?: string;
        filenameDisplay?: boolean;
    }
    let { image, isTitle = false, prefix="", filenameDisplay=true }: Props = $props();
    let tag = $derived(isTitle ? "h4" : "span");
    let name_provider = getNameProvider();
</script>

<svelte:element class="title-identification" class:mt-2={isTitle} this={tag} title={name_provider.getImageName(image)}>
    <span class="tag is-light is-bold mb-3">
        {prefix || ""}
        Image #{image.num}
    </span>
    {#if filenameDisplay}
        <br/>
        <span>{ellipsis(name_provider.getImageName(image), 16)}</span>
    {/if}
</svelte:element>
{#if isTitle}
    <p>{name_provider.getSourceName(image.document) || image.document?.name || image.subtitle || ""}</p>
{/if}