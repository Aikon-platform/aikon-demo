<script lang="ts">
    import { onMount } from "svelte";
    import { enforceValue, enforceBooleanValue, unquote, updateUrlSearchParams, maybeBooleanToBoolean } from "../../shared/utils";

    interface Props {
        form: HTMLElement;
        reuseFormReady: boolean;
    }
    let { form, reuseFormReady = $bindable() }: Props = $props();

    const datasetReuseTargetField = form.querySelector("#id_dataset") as HTMLInputElement;
    // which dataset to reuse
    let datasetReuseTargetValue = $state(datasetReuseTargetField.value);


    // TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // - URL binding for datasetCropsField
    // - URL binding for datasetReuseTargetField
    // - block crops (for watermarks: disallow running the experiment on crops)
    const datasetCropsField = form.querySelector("#id_crops") as HTMLSelectElement|null;
    const allowedDatasetCropsValues =
        datasetCropsField
            ? Array.from(datasetCropsField.querySelectorAll("option")).map(el => el.getAttribute("value"))
            : [];
    let datasetCropsOptions: {id?: string, name: string}[] = $state([]);
    let selectedDatasetCrops = $state();
    console.log("datasetCropsField", datasetCropsField);

    // fetch all crops (region extractions) for a given dataset ID
    async function fetchCropsForDataset(datasetId?: string) {
        // reset state
        datasetCropsOptions = [];
        selectedDatasetCrops = undefined;
        // fetch and update state
        if (datasetId) {
            const r = await fetch(`${window.location.origin}/datasets/${datasetId}/regions`);
            if (r.ok) {
                datasetCropsOptions = await r.json()
            }
        }
    }

    // selectedDatasetCrops is set => crops are selected
    $effect(() => {
        console.log("omg hiiii", selectedDatasetCrops);
        if (datasetCropsField) {
            datasetCropsField.value = selectedDatasetCrops as string;
        }
    })

    // datasetReuseTargetValue is set => a dataset is selected
    $effect(() => {
        datasetReuseTargetField.value = datasetReuseTargetValue;
        reuseFormReady = datasetReuseTargetValue != null;
        if (datasetCropsField) {
            fetchCropsForDataset(datasetReuseTargetValue);
        }
    });

    onMount(() => {
        if (datasetCropsField) {
            const options =
            console.log("options", options);
        }
    })

</script>

<div>
    <div class="dataset-reuse-select is-flex is-flex-direction-column is-align-items-start">
        <div class="select-wrapper mx-1 mb-1">
            <div class="select">
                <select bind:value={datasetReuseTargetValue}>
                    <option value="">Use dataset from</option>
                    {#each datasetReuseTargetField.children as option}
                        {#if option instanceof HTMLOptionElement && option.value != ""}
                            <option value={option.value}>{option.text}</option>
                        {/if}
                    {/each}
                </select>
            </div>
        </div>
        {#if datasetCropsOptions.length}
            <div class="m-1">
                <label for="dataset_crops_select">Use crops from...</label>
                <div class="select-wrapper">
                    <div class="select">
                        <select id="dataset_crops_select" bind:value={selectedDatasetCrops}>
                            <option value="" selected>--------</option>
                            {#each datasetCropsOptions as option}
                                <option value={option.id}>{option.name}</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </div>
        {/if}
        <div class="m-1">
            <a class="button"
                style={datasetReuseTargetValue ? '' : "cursor: not-allowed; opacity: 0.5"}
                href={datasetReuseTargetValue ? `/datasets/${datasetReuseTargetValue}/view` : undefined}
            >
                <span class="iconify iconify--mdi" data-icon="mdi:eye"></span>
                View dataset
            </a>
            <a class="button"
                style={selectedDatasetCrops ? '' : "cursor: not-allowed; opacity: 0.5"}
                href={selectedDatasetCrops ? `/regions/${selectedDatasetCrops}` : undefined}
            >
                <span class="iconify iconify--mdi" data-icon="mdi:eye"></span>
                View crops
            </a>
        </div>
    </div>
</div>
