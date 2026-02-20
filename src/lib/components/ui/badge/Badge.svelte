<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		variant?: BadgeVariant;
		children?: Snippet;
		class?: string;
	};

	let {
		variant = 'default',
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<span class="badge {variant} {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		transition-property: background-color, color, border-color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid transparent;
		white-space: nowrap;
	}

	.badge:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.default {
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		border-color: transparent;
	}

	.default:hover {
		background-color: hsl(var(--primary) / 0.9);
	}

	.secondary {
		background-color: hsl(var(--secondary));
		color: hsl(var(--secondary-foreground));
		border-color: transparent;
	}

	.secondary:hover {
		background-color: hsl(var(--secondary) / 0.8);
	}

	.destructive {
		background-color: hsl(var(--destructive));
		color: hsl(var(--destructive-foreground));
		border-color: transparent;
	}

	.destructive:hover {
		background-color: hsl(var(--destructive) / 0.9);
	}

	.outline {
		background-color: transparent;
		color: hsl(var(--foreground));
		border-color: hsl(var(--border));
	}
</style>
