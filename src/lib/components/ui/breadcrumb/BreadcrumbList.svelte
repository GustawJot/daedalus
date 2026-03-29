<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		children,
		class: className = ''
	}: Props = $props();
</script>

<ol {id} class="breadcrumb-list {className}">
	{#if children}{@render children()}{/if}
</ol>

<style>
	.breadcrumb-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-1-5);
		list-style: none;
		font-size: var(--text-sm);
		color: var(--muted-foreground);
	}
</style>
