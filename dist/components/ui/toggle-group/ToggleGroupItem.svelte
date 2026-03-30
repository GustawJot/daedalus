<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Size } from '../types.js';

	type Props = {
		value: string;
		pressed?: boolean;
		variant?: 'ghost' | 'outline';
		size?: Size;
		disabled?: boolean;
		onclick?: (value: string) => void;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		value,
		pressed = false,
		variant = 'ghost',
		size = 'md',
		disabled = false,
		onclick,
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	function handleClick() {
		if (disabled) return;
		onclick?.(value);
	}
</script>

<button
	type="button"
	class="toggle-group-item variant-{variant} size-{size} {className}"
	class:pressed
	aria-pressed={pressed}
	{disabled}
	onclick={handleClick}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</button>

<style>
	.toggle-group-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		line-height: var(--leading-sm);
		border-radius: var(--radius, 0.375rem);
		cursor: pointer;
		outline: none;
		border: 1px solid transparent;
		background-color: transparent;
		color: var(--muted-foreground);
		transition-property: background-color, color, border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
		-webkit-user-select: none;
	}

	.toggle-group-item:hover:not(:disabled) {
		background-color: var(--muted);
		color: var(--muted-foreground);
	}

	.toggle-group-item:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.toggle-group-item.pressed {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	/* Variant: outline */
	.toggle-group-item.variant-outline {
		border-color: var(--input);
		background-color: transparent;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.toggle-group-item.variant-outline:hover:not(:disabled) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.toggle-group-item.variant-outline.pressed {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	/* Size: md */
	.toggle-group-item.size-md {
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
		min-width: 2.25rem;
	}

	/* Size: sm */
	.toggle-group-item.size-sm {
		height: 2rem;
		padding: 0.375rem 0.625rem;
		min-width: 2rem;
		font-size: var(--text-sm);
	}

	/* Size: lg */
	.toggle-group-item.size-lg {
		height: 2.75rem;
		padding: 0.5rem 1.25rem;
		min-width: 2.75rem;
		font-size: var(--text-base);
	}
</style>
