<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = ''
	}: Props = $props();
</script>

<ol class="breadcrumb-list {className}">
	{#if children}{@render children()}{/if}
</ol>

<style>
	.breadcrumb-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.375rem;
		list-style: none;
		margin: 0;
		padding: 0;
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		color: hsl(var(--muted-foreground));
	}
</style>
