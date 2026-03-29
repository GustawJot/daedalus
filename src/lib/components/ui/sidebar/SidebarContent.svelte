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

<div {id} class="sidebar-content {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-content {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 6px;
		scrollbar-width: thin;
		scrollbar-color: var(--border) transparent;
	}

	.sidebar-content::-webkit-scrollbar {
		width: 6px;
	}

	.sidebar-content::-webkit-scrollbar-track {
		background: transparent;
	}

	.sidebar-content::-webkit-scrollbar-thumb {
		background-color: var(--border);
		border-radius: var(--radius-full);
	}
</style>
