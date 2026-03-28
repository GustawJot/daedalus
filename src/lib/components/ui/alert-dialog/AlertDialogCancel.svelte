<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		onclick?: () => void;
		disabled?: boolean;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		onclick,
		disabled = false,
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<button
	class="alertdialog-cancel {className}"
	{disabled}
	onclick={onclick}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.alertdialog-cancel {
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
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		border: 1px solid hsl(var(--input));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		cursor: pointer;
		transition-property: background-color, color, border-color, box-shadow, opacity;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
	}

	.alertdialog-cancel:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.alertdialog-cancel:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.alertdialog-cancel:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
