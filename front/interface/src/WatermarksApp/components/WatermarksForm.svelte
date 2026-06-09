<script lang="ts">
    import { onMount } from "svelte";

    import DatasetComposeForm from "../../DatasetApp/components/DatasetComposeForm.svelte";
    import AnalysisTypeSelect from "./AnalysisTypeSelect.svelte";
    import IndexSelect from "./IndexSelect.svelte";
    import NeedRegionsToggle from "./NeedRegionsToggle.svelte";
    import { enforceValue, updateUrlSearchParams } from "../../shared/utils";

    /**
     * NOTE URL-bound parameters are:
     * - "analysis_type"
     */

    interface Props {
        originalForm: HTMLElement;
    }

    const enforceAnalysisTypeFieldValue = enforceValue([ "", "query", "indexing", "similarity" ], "");

    // django form
    const { originalForm }:Props = $props();

    const experiment_name_field = originalForm.querySelector("#id_name") as HTMLInputElement;

    const analysis_type_field = originalForm.querySelector("#id_analysis_type") as HTMLSelectElement;
    let analysis_type_value = $state(analysis_type_field.value);

    let mounted = $state(false);

    // `analysis_type_field.value` and URLSearchParams.analysis_type can both set a value.
    // to avoid conflict, we defer the effect until after onMount has run. which defines form values from the URLSearchParams  ``
    $effect(() => {
        if (mounted) {
            analysis_type_field.value = analysis_type_value;
            updateUrlSearchParams(enforceAnalysisTypeFieldValue, "analysis_type", analysis_type_value);
        }
    });

    const index_options = Array.from(originalForm.querySelectorAll("[name=query_target_index]")).map(option => option.parentElement as HTMLLabelElement);
    // if analysis_type_field == "indexing"
    let index_value = $state("");

    const dataset_form = originalForm.querySelector(".dataset-form") as HTMLFormElement;

    const need_regions_field = originalForm.querySelector("#id_need_regions") as HTMLInputElement;

    const are_sketches_field = originalForm.querySelector("#id_are_sketches") as HTMLInputElement;

    const errors = originalForm.querySelectorAll(".errorlist");
    const submit_button = analysis_type_field.form!.querySelector("input[type=submit]") as HTMLButtonElement;
    let dataset_ready = $state(false);

    $effect(() => {
        if (analysis_type_value === "query") {
            experiment_name_field.value = "Query on " + index_options.find(option => option.querySelector("input")!.value === index_value)?.querySelector(".index-title")?.textContent.trim();
        } else {
            experiment_name_field.value = analysis_type_value.charAt(0).toUpperCase() + analysis_type_value.slice(1);
        }
    });

    $effect(() => {
        submit_button.disabled =
            analysis_type_value === ""
            || (analysis_type_value === "query" && index_value === "")
            || !dataset_ready;
    });

    // on mount, read `analysis_type` from URL search params and use it to set the form value.
    onMount(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const searchParamAnalysisType = urlSearchParams.get("analysis_type");
        if (searchParamAnalysisType) {
            analysis_type_value = updateUrlSearchParams(enforceAnalysisTypeFieldValue, "analysis_type", searchParamAnalysisType)
        }
        mounted = true;
    })
</script>

{#if errors.length > 0}
<div class="notification is-danger is-light py-3 px-4 mt-5 mb-2">
    <p class="error">Please fill in all the fields.</p>
    {#each errors as error}
        {@html error.outerHTML}
    {/each}
</div>
{/if}

<h4 class="mb-5">What do you want to do?</h4>
<AnalysisTypeSelect bind:value={analysis_type_value} field={analysis_type_field} />

{#if analysis_type_value === "query"}
<h4 class="mt-6 mb-5">What index do you want to query?</h4>
<IndexSelect options={index_options} bind:value={index_value} />
{/if}

{#if analysis_type_value && (analysis_type_value !== "query" || index_value != "")}
<h4 class="mt-6 mb-5">
    {#if analysis_type_value === "query"}
    What images do you want to use as a query?
    {:else}
    What is your dataset?
    {/if}
</h4>
<div class="box has-background-light">
    <DatasetComposeForm form={dataset_form} bind:ready={dataset_ready} />
</div>

<h4 class="mt-6 mb-5">What kind of images are in the dataset?</h4>
<NeedRegionsToggle field={need_regions_field} are_sketches_field={analysis_type_value === "indexing" ? are_sketches_field : undefined} />
{/if}
<div class="mb-4"></div>
