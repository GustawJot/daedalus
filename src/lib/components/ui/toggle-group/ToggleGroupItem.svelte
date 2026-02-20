<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		value: string;
		pressed?: boolean;
		variant?: 'default' | 'outline';
		size?: 'default' | 'sm' | 'lg';
		disabled?: boolean;
		onclick?: (value: string) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		value,
		pressed = false,
		variant = 'default',
		size = 'default',
		disabled = false,
		onclick,
		children,
		class: className = ''
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
		gap: 0.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		border-radius: var(--radius, 0.375rem);
		cursor: pointer;
		outline: none;
		border: 1px solid transparent;
		background-color: transparent;
		color: hsl(var(--muted-foreground));
		transition-property: background-color, color, border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
		-webkit-user-select: none;
	}

	.toggle-group-item:hover:not(:disabled) {
		background-color: hsl(var(--muted));
		color: hsl(var(--muted-foreground));
	}

	.toggle-group-item:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.toggle-group-item:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.toggle-group-item.pressed {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	/* Variant: outline */
	.toggle-group-item.variant-outline {
		border-color: hsl(var(--input));
		background-color: transparent;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.toggle-group-item.variant-outline:hover:not(:disabled) {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.toggle-group-item.variant-outline.pressed {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	/* Size: default */
	.toggle-group-item.size-default {
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
		min-width: 2.25rem;
	}

	/* Size: sm */
	.toggle-group-item.size-sm {
		height: 2rem;
		padding: 0.375rem 0.625rem;
		min-width: 2rem;
		font-size: 0.8125rem;
	}

	/* Size: lg */
	.toggle-group-item.size-lg {
		height: 2.75rem;
		padding: 0.5rem 1.25rem;
		min-width: 2.75rem;
		font-size: 1rem;
	}
</style>
