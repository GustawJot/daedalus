<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tone?: 'neutral' | 'critical';
		onclick?: () => void;
		disabled?: boolean;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		tone = 'neutral',
		onclick,
		disabled = false,
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<button
	class="alertdialog-action tone-{tone} {className}"
	{disabled}
	onclick={onclick}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.alertdialog-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		white-space: nowrap;
		border-radius: var(--radius, 0.375rem);
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		line-height: var(--leading-sm);
		height: 2.25rem;
		padding: 0.5rem 1rem;
		border: 1px solid transparent;
		cursor: pointer;
		transition-property: background-color, color, border-color, box-shadow, opacity;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
	}

	.alertdialog-action.tone-neutral {
		background-color: var(--primary);
		color: var(--primary-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.alertdialog-action.tone-neutral:hover {
		background-color: color-mix(in srgb, var(--primary) 90%, transparent);
	}

	.alertdialog-action.tone-critical {
		background-color: var(--destructive);
		color: var(--destructive-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.alertdialog-action.tone-critical:hover {
		background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
	}

	.alertdialog-action:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
