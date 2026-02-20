<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
	export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

	type Props = {
		variant?: ButtonVariant;
		size?: ButtonSize;
		children?: Snippet;
		class?: string;
		href?: string;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		[key: string]: unknown;
	};

	let {
		variant = 'default',
		size = 'default',
		children,
		class: className = '',
		href,
		disabled = false,
		type = 'button',
		...restProps
	}: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="button {variant} size-{size} {className}"
		class:disabled
		aria-disabled={disabled || undefined}
		{...restProps}
	>
		{#if children}{@render children()}{/if}
	</a>
{:else}
	<button
		type={type}
		{disabled}
		class="button {variant} size-{size} {className}"
		{...restProps}
	>
		{#if children}{@render children()}{/if}
	</button>
{/if}

<style>
	.button {
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
		transition-property: background-color, color, border-color, box-shadow, opacity;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		border: 1px solid transparent;
		text-decoration: none;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
	}

	.button:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.button:disabled,
	.button.disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	/* Variants */
	.default {
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.default:hover {
		background-color: hsl(var(--primary) / 0.9);
	}

	.destructive {
		background-color: hsl(var(--destructive));
		color: hsl(var(--destructive-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.destructive:hover {
		background-color: hsl(var(--destructive) / 0.9);
	}

	.outline {
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		border-color: hsl(var(--input));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.outline:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.secondary {
		background-color: hsl(var(--secondary));
		color: hsl(var(--secondary-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.secondary:hover {
		background-color: hsl(var(--secondary) / 0.8);
	}

	.ghost {
		background-color: transparent;
		color: hsl(var(--foreground));
	}

	.ghost:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.link {
		background-color: transparent;
		color: hsl(var(--primary));
		text-decoration-line: underline;
		text-underline-offset: 4px;
	}

	.link:hover {
		text-decoration-line: underline;
		opacity: 0.8;
	}

	/* Sizes */
	.size-default {
		height: 2.25rem;
		padding: 0.5rem 1rem;
	}

	.size-sm {
		height: 2rem;
		padding: 0.375rem 0.75rem;
		font-size: 0.8125rem;
		border-radius: var(--radius, 0.375rem);
	}

	.size-lg {
		height: 2.75rem;
		padding: 0.5rem 1.5rem;
		font-size: 1rem;
	}

	.size-icon {
		height: 2.25rem;
		width: 2.25rem;
		padding: 0;
	}
</style>
