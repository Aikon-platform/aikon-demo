<script lang="ts">
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import ImageGenericList from "../../shared/components/ImageGenericList.svelte";
    import type { TDatasetContentsItemInterface, TDatasetFormatType } from "../types";

    interface Props {
        datasetContentsItem: TDatasetContentsItemInterface;
        datasetFormat: TDatasetFormatType;
        itemIndex: number;
    }

    const { datasetContentsItem, datasetFormat, itemIndex }: Props = $props();

    const DEFAULT_DISPLAY_LENGTH = 4;
    const IMAGE_PAGE_SIZE = 50;
    let totalLength = $derived(datasetContentsItem.images.length);
    /**
     * when updated, the number of items to display (`displayLength`) is derived.
     * possible values are:
     *   -1 => display everything
     *   0  => display 4 images
     *   1+ => display number currentPage*totalLength
     */
    let currentPage = $state(0);
    let displayLength = $derived(
        currentPage === -1
            ? totalLength
            : currentPage === 0
                ? Math.min(totalLength, DEFAULT_DISPLAY_LENGTH)
                : Math.min(totalLength, currentPage * IMAGE_PAGE_SIZE)
    );

    const updateCurrentPage = ({all, page}: {all?: boolean; page?: boolean}) => {
        if (all) {
            // display all items
            currentPage = -1;
        } else if (page) {
            // update states: currentPage + display next page of images
            currentPage += 1;
        } else {
            // revert back  to DEFAULT_DISPLAY_LENGTH
            currentPage = 0;
        }
    }
    function folderPathCleaner(folderPath: string): string {
        return folderPath.split("/").slice(5).join("/") + "/";
    }
</script>

<div class="dci-wrapper">
    <div
        class="dci-title is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center mt-2 mb-2"
    >
        <h3 class="id-suffix m-0">
            Images in {datasetFormat === "iiif"
                ? `document #${itemIndex + 1}`
                : `folder ${folderPathCleaner(datasetContentsItem.name)}`}
        </h3>
        <div class="columns">
            {#if displayLength > DEFAULT_DISPLAY_LENGTH}
                <IconBtn
                    icon="mdi:minus"
                    label="See less items"
                    onclick={() => updateCurrentPage({})}
                ></IconBtn>
            {/if}
            {#if totalLength > IMAGE_PAGE_SIZE && displayLength < totalLength}
                <IconBtn
                    icon="mdi:plus"
                    label={`See next ${IMAGE_PAGE_SIZE} items`}
                    onclick={() => updateCurrentPage({page: true})}
                ></IconBtn>
            {/if}
            {#if totalLength > DEFAULT_DISPLAY_LENGTH && displayLength < totalLength}
                <IconBtn
                    icon="mdi:plus"
                    label={`See all items ${totalLength > IMAGE_PAGE_SIZE ? "(slow)" : ""}`}
                    onclick={() => updateCurrentPage({all: true})}
                ></IconBtn>
            {/if}
        </div>
    </div>
    <div class="dci-image-wrapper">
        <ImageGenericList image_array={datasetContentsItem.images.slice(0, displayLength)} />
    </div>
</div>
