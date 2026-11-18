<script lang="ts">
    import { onMount } from "svelte";
    import { Tabs, Toggle } from "bits-ui";
    import JSZip from "jszip";
    import Icon from "@iconify/svelte";

    import DatasetReuseForm from "./DatasetReuseForm.svelte";
    import DatasetUploadForm from "./DatasetUploadForm.svelte";
    import { enforceBooleanValue, updateUrlSearchParams, maybeBooleanToBoolean } from "../../shared/utils";

    /**
     * NOTE URL-bound parameters are:
     * - "dataset_type": TDatasetValue. has no effect if dataset_reuse=true
     * - "dataset_reuse": boolean
     *
     */

    interface Props {
        // django form
        form: HTMLElement;
        // DatasetComposeForm is ready
        ready: boolean;
        // DatasetReuseForm is ready
        readyReuse: boolean;
        // DatasetUploadForm is ready
        readyUpload: boolean;
    }
    let { form, ready = $bindable(), readyReuse = $bindable(), readyUpload = $bindable() }: Props = $props();

    $effect(() => {
        ready = readyReuse || readyUpload;
    })

    const dataset_reuse_field = form.querySelector("#id_reuse_dataset") as HTMLInputElement;

    // checkbox: reuse existing dataset.
    let dataset_reuse_value = $state(dataset_reuse_field.checked);
    const defaultDatasetReuse = false;
    const enforceDatasetReuseValue = enforceBooleanValue(defaultDatasetReuse);

    function onDatasetReuseChange(value: boolean) {
        dataset_reuse_field.checked = value;
        updateUrlSearchParams(enforceDatasetReuseValue, "dataset_reuse", value);
    }

    onMount(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);

        // set dataset_reuse_value from URL, if possible.
        const urlDatasetReuse = maybeBooleanToBoolean(urlSearchParams.get("dataset_reuse"));
        dataset_reuse_value = updateUrlSearchParams(enforceDatasetReuseValue, "dataset_reuse", urlDatasetReuse);
    });
</script>

<div class="dataset-compose-form is-relative">
    <div class="dataset-reuse-toggle">
        <Toggle.Root bind:pressed={dataset_reuse_value} onPressedChange={onDatasetReuseChange}>
            <span class="mr-2">Reuse existing dataset</span>
            <Icon icon="mdi:sync" />
        </Toggle.Root>
    </div>
    {#if dataset_reuse_value}
        <DatasetReuseForm form={form} bind:readyReuse={readyReuse}></DatasetReuseForm>
    {:else}
        <DatasetUploadForm form={form} bind:readyUpload={readyUpload}></DatasetUploadForm>
    {/if}
</div>
