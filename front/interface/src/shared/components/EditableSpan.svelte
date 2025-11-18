<script lang="ts">
	import { Popover } from 'bits-ui';

	interface Props {
		value?: string;
		placeholder: string;
		onblur?: () => void;
		onenter?: () => void;
		editing?: boolean;
		focus?: boolean;
		required?: boolean;
		class?: string;
		editable?: boolean;
	}
	let {
		value = $bindable(),
		placeholder,
		onblur,
		onenter,
		editing: editing_init,
		focus,
		required = false,
		class: inputClass,
		editable = true,
	}: Props = $props();

	let editing = $state(editing_init || false);
	let input: HTMLSpanElement | null = $state(null);
	let internalValue = $state(value);

	$effect(() => {
		internalValue = value;
	});

	if (required) {
		placeholder = '*' + placeholder;
	}

	function trimValue() {
		value = (value || '').trim();
		internalValue = (internalValue || '').trim();
	}

	function handleKeypress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			editing = false;
			if (onenter) {
				onenter();
			}
		}
	}

	function startEditing() {
		editing = true;
	}

	function onBlur() {
		editing = false;
		trimValue();
		value = internalValue;
		if (onblur) {
			onblur();
		}
	}

	function onFocus() {
		editing = true;
	}

	let empty = $derived(!internalValue || internalValue.trim() == '');

	$effect(() => {
		if (focus && input) {
			setTimeout(() => {
				if (!input) return;
				// select content
				const selection = window.getSelection();
				if (selection) {
					const range = document.createRange();
					range.setStart(input, 0);
					range.collapse(true);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}, 100);
		}
	});
</script>

{#if editable}
<span
	contenteditable="true"
	class={inputClass}
	class:editable-clickable={!editing}
	class:empty
	class:required
	bind:innerText={internalValue}
	onblur={onBlur}
	onfocus={onFocus}
	onkeypress={handleKeypress}
	bind:this={input}
	{placeholder}
	onclick={startEditing}
	spellcheck={editing}
	role="textbox"
	tabindex="0"
></span>
{:else}
<span
	class={inputClass}
	class:empty
	class:required
	{placeholder}
>{internalValue}</span>
{/if}

<style lang="scss">
	span {
		display: block;
		margin: -0.5rem;
		padding: 0.5rem;
		:global(br) {
			display: none;
		}
	}
	span.editable-clickable {
		cursor: pointer;
		border-radius: var(--bulma-radius);
		&:hover {
			outline: 1px solid var(--bulma-link);
		}
	}
	span.empty {
		&::after {
			content: attr(placeholder);
		}
		&:not(.placeholder-is-ok)::after {
			opacity: 0.5;
			font-style: italic;
		}
	}
	.editable-span {
		position: relative;
	}
</style>
