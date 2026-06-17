<script lang="ts">
    import { ToggleGroup } from "bits-ui";
    import { onMount } from "svelte";
    import { enforceValue, updateUrlSearchParams } from "../../shared/utils";

    interface Props {
        options: HTMLLabelElement[];
        value: string;
    }

    const urlParamName = "index";

    let { options, value = $bindable() }:Props = $props();

    // TODO bind to this parameter.
    const options_detailed = $derived(options.map(option => ({
        label: Array.from(option.childNodes).filter(node => (node as any).tagName !== "INPUT").map(node => (node as any).outerHTML || node.textContent).join(""),
        input: option.querySelector("input") as HTMLInputElement,
    })));
    console.log("input_ids", options_detailed.map(o => o.input.id));

    function onValueChange(newValue: string) {
        options_detailed.forEach(({ input }) => {
            if (input.value === newValue) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
        console.log("onValueChange", newValue);
    }

    onMount(() => {
        options_detailed.forEach(({ input }) => {
            if (input.checked) {
                value = input.value;
            }
        });
    });
</script>

<ToggleGroup.Root bind:value={value} type="single" {onValueChange} orientation="vertical" class="dataset-compose-form">
    {#each options_detailed as { input, label }}
        <ToggleGroup.Item value={input.value} class="search-index-option">
            {@html label}
        </ToggleGroup.Item>
    {:else}
        <ToggleGroup.Item value="" class="search-index-option">No index available</ToggleGroup.Item>
    {/each}
</ToggleGroup.Root>