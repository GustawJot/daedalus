<script lang="ts">
	import type { Snippet } from 'svelte';

	export type AlertVariant = 'default' | 'destructive';

	type Props = {
		variant?: AlertVariant;
		children?: Snippet;
		class?: string;
	};

	let {
		variant = 'default',
		children,
		class: className = ''
	}: Props = $props();
</script>

<div
	role="alert"
	class="alert {variant} {className}"
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.alert {
		position: relative;
		width: 100%;
		border-radius: var(--radius, 0.375rem);
		border: 1px solid hsl(var(--border));
		padding: 1rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.default {
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		border-color: hsl(var(--border));
	}

	.destructive {
		background-color: hsl(var(--destructive) / 0.1);
		color: hsl(var(--destructive));
		border-color: hsl(var(--destructive) / 0.5);
	}

	.destructive :global(.alert-title) {
		color: hsl(var(--destructive));
	}

	.destructive :global(.alert-description) {
		color: hsl(var(--destructive) / 0.9);
	}
</style>
