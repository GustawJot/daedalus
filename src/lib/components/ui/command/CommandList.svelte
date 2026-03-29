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

<div {id} class="command-list {className}" role="listbox">
	{#if children}{@render children()}{/if}
</div>

<style>
	.command-list {
		max-height: 18rem;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0.25rem;
		scrollbar-width: thin;
		scrollbar-color: var(--border) transparent;
	}

	.command-list::-webkit-scrollbar {
		width: 6px;
	}

	.command-list::-webkit-scrollbar-track {
		background: transparent;
	}

	.command-list::-webkit-scrollbar-thumb {
		background-color: var(--border);
		border-radius: var(--radius-full);
	}
</style>
