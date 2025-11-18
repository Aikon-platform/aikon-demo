<script lang="ts">
    import DatasetComposeForm from "../../DatasetApp/components/DatasetComposeForm.svelte";
    import AnalysisTypeSelect from "./AnalysisTypeSelect.svelte";
    import IndexSelect from "./IndexSelect.svelte";
    import NeedRegionsToggle from "./NeedRegionsToggle.svelte";

    interface Props {
        originalForm: HTMLElement;
    }

    let { originalForm }:Props = $props();

    let experiment_name_field = originalForm.querySelector("#id_name") as HTMLInputElement;

    let analysis_type_field = originalForm.querySelector("#id_analysis_type") as HTMLSelectElement;
    let analysis_type_value = $state(analysis_type_field.value);

    let index_options = Array.from(originalForm.querySelectorAll("[name=query_target_index]")).map(option => option.parentElement as HTMLLabelElement);
    let index_value = $state("");

    let dataset_form = originalForm.querySelector(".dataset-form") as HTMLFormElement;

    let need_regions_field = originalForm.querySelector("#id_need_regions") as HTMLInputElement;
    let need_regions_value = $state(need_regions_field.checked);

    let errors = originalForm.querySelectorAll(".errorlist");
    let submit_button = analysis_type_field.form!.querySelector("input[type=submit]") as HTMLButtonElement;
    let dataset_ready = $state(false);

    $effect(() => {
        if (analysis_type_value === "query") {
            experiment_name_field.value = "Query on " + index_options.find(option => option.querySelector("input")!.value === index_value)?.querySelector(".index-title")?.textContent.trim();
        } else {
            experiment_name_field.value = analysis_type_value.charAt(0).toUpperCase() + analysis_type_value.slice(1);
        }
    });

    $effect(() => {
        submit_button.disabled = analysis_type_value === "" || (analysis_type_value === "query" && index_value === "") || !dataset_ready;
    });
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

<h4 class="mt-6 mb-5">Are those image cropped and centered?</h4>
<NeedRegionsToggle bind:value={need_regions_value} field={need_regions_field} />
<div class="mb-4"></div>
{/if}
