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

<ul class="pagination-content {className}">
	{#if children}{@render children()}{/if}
</ul>

<style>
	.pagination-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
