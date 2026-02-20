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

<div class="sidebar-content {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-content {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0.5rem;
		scrollbar-width: thin;
		scrollbar-color: hsl(var(--border)) transparent;
	}

	.sidebar-content::-webkit-scrollbar {
		width: 6px;
	}

	.sidebar-content::-webkit-scrollbar-track {
		background: transparent;
	}

	.sidebar-content::-webkit-scrollbar-thumb {
		background-color: hsl(var(--border));
		border-radius: 9999px;
	}
</style>
