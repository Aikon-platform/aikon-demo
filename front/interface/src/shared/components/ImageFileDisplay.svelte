<script lang="ts">
    import Icon from "@iconify/svelte";
    import { Tooltip } from "bits-ui";
    import type { TImageInfo, TMatchTransposition } from "../types";
    import { getMagnifyingContext } from "./ImageMagnifier.svelte";
    import ImageInfos from "./ImageInfos.svelte";

    interface Props {
        image: TImageInfo;
        similarity?: number;
        transpositions?: TMatchTransposition[];
        comparison?: TImageInfo;
        href?: string;
        disable_magnify?: boolean;
        disable_pin?: boolean;
        disable_all?: boolean;
    }

    let {
        image,
        similarity,
        transpositions,
        comparison,
        href,
        disable_magnify,
        disable_pin,
        disable_all,
    }: Props = $props();

    let magnifying = getMagnifyingContext();
    let pinned = $derived(magnifying.comparison?.id === image.id);

    function togglePinned() {
        magnifying.comparison = pinned ? undefined : image;
    }

    function magnify() {
        magnifying.image = image;
        magnifying.transpositions = transpositions;
        if (comparison) magnifying.comparison = comparison;
    }
</script>

<Tooltip.Provider delayDuration={0}>
    <Tooltip.Root>
        <Tooltip.Trigger class="not-button display-item">
            <div class="display-image">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                <img
                    src={image.url}
                    alt={image.id}
                    class={"image display-img " + (transpositions || []).join(" ")}
                    onclick={!disable_magnify && !disable_all ? magnify : undefined}
                />
            </div>
            {#if !disable_all}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div class="display-tools" onclick={(e) => e.stopPropagation()}>
                    {#if image.link}
                        <a
                            href={image.link}
                            class="image-source"
                            target="_blank"
                            title="See in context"
                        >
                            <Icon icon="mdi:book-open-blank-variant" />
                        </a>
                    {/if}
                    {#if magnifying && !disable_pin}
                        {#if !pinned}
                            <a
                                href="javascript:void(0)"
                                class="image-pin"
                                title="Pin as comparison"
                            >
                                <Icon icon="mdi:pin" onclick={togglePinned} />
                            </a>
                        {:else}
                            <a
                                href="javascript:void(0)"
                                class="image-pin always-visible"
                                title="Pin as comparison"
                            >
                                <Icon icon="mdi:pin-off" onclick={togglePinned} />
                            </a>
                        {/if}
                    {/if}
                    {#if magnifying}
                        <a
                            href="javascript:void(0)"
                            class="image-magnify"
                            title="Magnify"
                            onclick={magnify}
                        >
                            <Icon icon="mdi:arrow-expand" />
                        </a>
                    {/if}
                    {#if href}
                        <a {href} class="image-focus" title="Show detail">
                            <Icon icon="mdi:image-search" />
                        </a>
                    {/if}
                </div>
            {/if}
            {#if similarity}
                <span class="similarity">{similarity}</span>
            {/if}
        </Tooltip.Trigger>
        <Tooltip.Content class="tooltip">
            <div class="display-image">
                <img
                    src={image.url}
                    alt={image.id}
                    class={["display-img", ...(transpositions || [])]}
                />
            </div>
            <ImageInfos {image} isTitle={true} />
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>
