<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = Omit<HTMLButtonAttributes, 'onclick'> & {
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		onclick,
		children,
		class: className = '',
		disabled = false,
		...restProps
	}: Props = $props();

	function handleClick() {
		if (onclick) {
			onclick();
		}
	}
</script>

<button
	type="button"
	class="collapsible-trigger {className}"
	{disabled}
	onclick={handleClick}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.collapsible-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: inherit;
		line-height: inherit;
		outline: none;
	}

	.collapsible-trigger:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
		border-radius: 2px;
	}

	.collapsible-trigger:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
