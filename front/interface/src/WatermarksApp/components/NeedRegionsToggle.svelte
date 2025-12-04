<script lang="ts">
    import Icon from "@iconify/svelte";
    import { ToggleGroup } from "bits-ui";
    import { onMount } from "svelte";

    interface Props {
        value?: boolean;
        field: HTMLInputElement;
        are_sketches_field?: HTMLInputElement;
    }

    let { value = $bindable(true), field, are_sketches_field }: Props = $props();
    let internal_value = $state(value ? "true" : "false");

    function onValueChange(newValue: string) {
        internal_value = newValue;
        value = internal_value == "true";
        field.checked = value;
        if (are_sketches_field) {
            are_sketches_field.checked = internal_value == "sketches";
        }
    }

    onMount(() => {
        internal_value = are_sketches_field?.checked ? "sketches" : field.checked ? "true" : "false";
        value = internal_value == "true";
    });

    $inspect(are_sketches_field);
</script>

<ToggleGroup.Root value={internal_value} type="single" {onValueChange} class="columns toggle-analysis-type">
    <ToggleGroup.Item value="true" class="column is-3 has-text-centered">
        <Icon icon="mdi:image-size-select-large" />
        <span><b>Detect and crop</b> watermarks inside the full pages</span>
    </ToggleGroup.Item>
    <ToggleGroup.Item value="false" class="column is-3 has-text-centered">
        <Icon icon="mdi:fullscreen" />
        <span>Watermarks are already cropped, use <b>full images</b></span>
    </ToggleGroup.Item>
    {#if are_sketches_field}
        <ToggleGroup.Item value="sketches" class="column is-3 has-text-centered">
            <Icon icon="lucide:flower" />
            <span>Images are <b>black sketches on white background</b>, use <b>full images</b></span>
        </ToggleGroup.Item>
    {/if}
</ToggleGroup.Root>