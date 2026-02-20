<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		onclick?: () => void;
		disabled?: boolean;
		children?: Snippet;
		class?: string;
	};

	let {
		onclick,
		disabled = false,
		children,
		class: className = ''
	}: Props = $props();
</script>

<button
	class="alertdialog-action {className}"
	{disabled}
	onclick={onclick}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.alertdialog-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		white-space: nowrap;
		border-radius: var(--radius, 0.375rem);
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		height: 2.25rem;
		padding: 0.5rem 1rem;
		border: 1px solid transparent;
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		cursor: pointer;
		transition-property: background-color, color, border-color, box-shadow, opacity;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
	}

	.alertdialog-action:hover {
		background-color: hsl(var(--primary) / 0.9);
	}

	.alertdialog-action:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.alertdialog-action:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
