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

<ul {id} class="pagination-content {className}">
	{#if children}{@render children()}{/if}
</ul>

<style>
	.pagination-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-1);
		list-style: none;
	}
</style>
