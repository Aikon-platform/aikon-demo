<script lang="ts">
    import Icon from "@iconify/svelte";
    import { ToggleGroup } from "bits-ui";
    import { onMount } from "svelte";

    interface Props {
        value: boolean;
        field: HTMLInputElement;
    }

    let { value = $bindable(), field }:Props = $props();
    let internal_value = $state(value ? "true" : "false");

    function onValueChange(newValue: string) {
        internal_value = newValue;
        value = internal_value == "true";
        field.checked = value;
    }

    onMount(() => {
        internal_value = field.checked ? "true" : "false";
        value = internal_value == "true";
    });
</script>

<ToggleGroup.Root value={internal_value} type="single" {onValueChange} class="columns toggle-analysis-type">
    <ToggleGroup.Item value="true" class="column is-3 has-text-centered">
        <Icon icon="mdi:image-size-select-large" />
        <span><b>Detect and crop</b> watermarks inside the images</span>
    </ToggleGroup.Item>
    <ToggleGroup.Item value="false" class="column is-3 has-text-centered">
        <Icon icon="mdi:fullscreen" />
        <span>Watermarks are already cropped, use <b>full images</b></span>
    </ToggleGroup.Item>
</ToggleGroup.Root>