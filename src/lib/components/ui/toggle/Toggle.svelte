<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Size } from '../types.js';

	type Props = {
		pressed?: boolean;
		variant?: 'ghost' | 'outline';
		size?: Size;
		disabled?: boolean;
		onchange?: (pressed: boolean) => void;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		pressed = $bindable(false),
		variant = 'ghost',
		size = 'md',
		disabled = false,
		onchange,
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	function handleClick() {
		if (disabled) return;
		pressed = !pressed;
		onchange?.(pressed);
	}
</script>

<button
	type="button"
	class="toggle variant-{variant} size-{size} {className}"
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
	.toggle {
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

	.toggle:hover:not(:disabled) {
		background-color: hsl(var(--muted));
		color: hsl(var(--muted-foreground));
	}

	.toggle:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.toggle:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.toggle.pressed {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	/* Variant: outline */
	.toggle.variant-outline {
		border-color: hsl(var(--input));
		background-color: transparent;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.toggle.variant-outline:hover:not(:disabled) {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.toggle.variant-outline.pressed {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	/* Size: md */
	.toggle.size-md {
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
	}

	/* Size: sm */
	.toggle.size-sm {
		height: 2rem;
		padding: 0.375rem 0.625rem;
		font-size: 0.8125rem;
	}

	/* Size: lg */
	.toggle.size-lg {
		height: 2.75rem;
		padding: 0.5rem 1.25rem;
		font-size: 1rem;
	}
</style>
