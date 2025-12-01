<script lang="ts">
    import { toDatasetImageBrowserInterface } from "../converters";
    import type { TDatasetFormatType, TDjangoDatasetInterface } from "../types";
    import DatasetContentItem from "./DatasetContentItem.svelte";
    import ImageMagnifier, { setMagnifyingContext } from "../../shared/components/ImageMagnifier.svelte";
    import NameProvider, { setNameProvider } from "../../shared/naming.svelte";
    import { onMount } from "svelte";

    interface Props {
        dataset: TDjangoDatasetInterface;
        datasetFormat: TDatasetFormatType;
        metadataURL?: string;
    }
    let { dataset, datasetFormat, metadataURL }: Props = $props();

    let name_provider = new NameProvider();
    setNameProvider(name_provider);

    const datasetAsInterface = toDatasetImageBrowserInterface(dataset, datasetFormat);

    let magnifying = $state({});
    setMagnifyingContext(magnifying);

    onMount(() => {
        if (metadataURL && metadataURL !== "" && metadataURL != "None") {
            name_provider.fetchMetadataNames(metadataURL);
        }
    });
</script>

<div>
    {#each datasetAsInterface.datasetContents as datasetContentsItem, idx}
        <DatasetContentItem {datasetContentsItem} {datasetFormat} itemIndex={idx} />
    {/each}
</div>

<ImageMagnifier />