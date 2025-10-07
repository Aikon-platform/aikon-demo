<script lang="ts">
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import ImageGenericList from "../../shared/components/ImageGenericList.svelte";
    import type { TDatasetContentsItemInterface, TDatasetFormatType } from "../types";

    interface Props {
        datasetContentsItem: TDatasetContentsItemInterface;
        datasetFormat: TDatasetFormatType;
        itemIndex: number;
    }

    let { datasetContentsItem, datasetFormat, itemIndex }: Props = $props();

    const DEFAULT_DISPLAY_LENGTH = 4;
    let displayLength = $state(DEFAULT_DISPLAY_LENGTH);
    let updateDisplayLength = () =>
        (displayLength =
            displayLength === DEFAULT_DISPLAY_LENGTH
                ? datasetContentsItem.images.length
                : DEFAULT_DISPLAY_LENGTH);

    function folderPathCleaner(folderPath: string): string {
        return folderPath.split("/").slice(5).join("/") + "/";
    }
</script>

<div class="dci-wrapper">
    <div
        class="dci-title is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center"
    >
        <h3 class="id-suffix m-0">
            Images in {datasetFormat === "iiif"
                ? `document #${itemIndex + 1}`
                : `folder ${folderPathCleaner(datasetContentsItem.name)}`}
        </h3>
        {#if datasetContentsItem.images.length > DEFAULT_DISPLAY_LENGTH}
            <IconBtn
                icon={displayLength === 4 ? "mdi:plus" : "mdi:minus"}
                label={displayLength === 4 ? "See more items" : "See less items"}
                onclick={() => updateDisplayLength()}
            ></IconBtn>
        {/if}
    </div>
    <ImageGenericList image_array={datasetContentsItem.images.slice(0, displayLength)} />
</div>
