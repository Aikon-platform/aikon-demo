<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        icon: string;
        label?: string;
        onclick?: (e: MouseEvent) => void;
        disabled?: boolean;
        class?: ClassValue;
    }
    let { icon, label, onclick, disabled, class: className }: Props = $props();
</script>

<button class={[className || "is-link is-light mr-2", "button"]} onclick={onclick} class:disabled={disabled}>
    <Icon icon={icon} />
    {#if label}
        <span>{label}</span>
    {/if}
</button>