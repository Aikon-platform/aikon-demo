<script lang="ts">
    import { onMount } from "svelte";
    import { updateUrlSearchParams, isString, unquote } from "../../shared/utils";

    interface Props {
        form: HTMLElement;
        reuseFormReady: boolean;
    }
    let { form, reuseFormReady = $bindable() }: Props = $props();

    // TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // - in the Django form, unset dataset value when crops are selected (but don't touch the svelte values)

    // URL-binding for both parameters
    const urlSearchParams = new URLSearchParams(window.location.search);
    const paramNameCrops = "crops_id";
    const paramNameDataset = "dataset_id";
    const _updateUrlSearchParams = (paramName: string) =>
        (newVal: any) => updateUrlSearchParams(
            () => isString(newVal) ? newVal : "",
            paramName,
            newVal
        );
    const updateUrlSearchParamsCrops = _updateUrlSearchParams(paramNameCrops);
    const updateUrlSearchParamsDataset = _updateUrlSearchParams(paramNameDataset);

    // dataset selection
    const datasetReuseTargetField = form.querySelector("#id_dataset") as HTMLInputElement;
    let selectedDataset = $state(unquote(urlSearchParams.get(paramNameDataset)) || datasetReuseTargetField.value);

    // crops selection.
    // in region extractions and datasets, it's impossible to select crops => it is null in those cases.
    const el = form.querySelector("#id_crops");
    const datasetCropsField = el instanceof HTMLSelectElement ? el : null;
    // list of crops available in the django form (empty array if datasetCropsField is undefined)
    const allowedDatasetCropsValues =
        datasetCropsField
            ? Array.from(datasetCropsField.querySelectorAll("option")).map(el => el.getAttribute("value"))
            : [];
    // updated by `fetchCropsForDataset`: list of available crops for the currently selected dataset
    let datasetCropsOptions: {id: string|null, name: string}[] = $state([]);
    // currently selected crops. on mount, updated in `fetchCropsForDataset`
    let selectedCrops: string = $state("");
    // dirty crops ID read from URL. validated when `fetchCropsForDataset` is first run.
    let cropsIdFromUrl: string|null = unquote(urlSearchParams.get(paramNameCrops)) || "";

    // fetch all crops (region extractions) for a given dataset ID
    async function fetchCropsForDataset(datasetId?: string) {
        // reset state
        datasetCropsOptions = [];
        selectedCrops = "";

        // fetch and update state
        if (!datasetId) return;
        const r = await fetch(`${window.location.origin}/datasets/${datasetId}/regions`);
        // check if `selectedDataset` has been reset during the `fetch` to avoid a race.
        if (!r.ok || datasetId !== selectedDataset) return;
        datasetCropsOptions = await r.json()

        // on mount, set `selectedCrops` from `cropsIdFromUrl`, if `datasetCropsOptions` includes the URL-read crops.
        // runs only once at component mount.
        if (cropsIdFromUrl && datasetCropsOptions.map(x => x.id).includes(cropsIdFromUrl)) {
            selectedCrops = cropsIdFromUrl!;
            cropsIdFromUrl = null;
        }
    }

    // selectedCrops is set => crops are selected and URL is updated
    $effect(() => {
        console.log("1: omg hiiii", selectedCrops);
        if (datasetCropsField) {
            if (allowedDatasetCropsValues.includes(selectedCrops)) {
                console.log("2: found", selectedCrops)
                datasetCropsField.value = selectedCrops as string;
                updateUrlSearchParamsCrops(selectedCrops)
            }
        }
    })

    // selectedDataset is set => a dataset is selected
    $effect(() => {
        datasetReuseTargetField.value = selectedDataset;
        reuseFormReady = selectedDataset != null;
        updateUrlSearchParamsDataset(selectedDataset);
        if (datasetCropsField) {
            fetchCropsForDataset(selectedDataset);
        }
    });

</script>

<div>
    <div class="dataset-reuse-select is-flex is-flex-direction-column is-align-items-start">
        <div class="select-wrapper mx-1 mb-1">
            <div class="select">
                <select bind:value={selectedDataset}>
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
                        <select id="dataset_crops_select" bind:value={selectedCrops}>
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
                style={selectedDataset ? '' : "cursor: not-allowed; opacity: 0.5"}
                href={selectedDataset ? `/datasets/${selectedDataset}/view` : undefined}
            >
                <span class="iconify iconify--mdi" data-icon="mdi:eye"></span>
                View dataset
            </a>
            <a class="button"
                style={selectedCrops ? '' : "cursor: not-allowed; opacity: 0.5"}
                href={selectedCrops ? `/regions/${selectedCrops}` : undefined}
            >
                <span class="iconify iconify--mdi" data-icon="mdi:eye"></span>
                View crops
            </a>
        </div>
    </div>
</div>
