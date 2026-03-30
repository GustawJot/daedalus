<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<ul {id} class="sidebar-menu {className}">
	{#if children}{@render children()}{/if}
</ul>

<style>
	.sidebar-menu {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
