<script lang="ts">
    import { toDatasetImageBrowserInterface } from "../converters";
    import type { TDatasetFormatType, TDjangoDatasetInterface } from "../types";
    import DatasetContentItem from "./DatasetContentItem.svelte";
    import ImageMagnifier, { setMagnifyingContext } from "../../shared/components/ImageMagnifier.svelte";

    interface Props {
        dataset: TDjangoDatasetInterface;
        datasetFormat: TDatasetFormatType;
    }
    let { dataset, datasetFormat }: Props = $props();

    const datasetAsInterface = toDatasetImageBrowserInterface(dataset, datasetFormat);

    let magnifying = $state({});
    setMagnifyingContext(magnifying);
</script>

<div>
    {#each datasetAsInterface.datasetContents as datasetContentsItem, idx}
        <DatasetContentItem {datasetContentsItem} {datasetFormat} itemIndex={idx} />
    {/each}
</div>

<ImageMagnifier />