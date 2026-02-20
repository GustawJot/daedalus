<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div class="card {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.card {
		border-radius: var(--radius, 0.375rem);
		border: 1px solid hsl(var(--border));
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
