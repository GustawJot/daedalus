<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let {
		children,
		class: className = ''
	}: Props = $props();
</script>

<caption class="table-caption {className}">
	{#if children}{@render children()}{/if}
</caption>

<style>
	.table-caption {
		margin-top: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: hsl(var(--muted-foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
