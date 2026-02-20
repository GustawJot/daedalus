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

<div class="command-list {className}" role="listbox">
	{#if children}{@render children()}{/if}
</div>

<style>
	.command-list {
		max-height: 18rem;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0.25rem;
		scrollbar-width: thin;
		scrollbar-color: hsl(var(--border)) transparent;
	}

	.command-list::-webkit-scrollbar {
		width: 6px;
	}

	.command-list::-webkit-scrollbar-track {
		background: transparent;
	}

	.command-list::-webkit-scrollbar-thumb {
		background-color: hsl(var(--border));
		border-radius: 9999px;
	}
</style>
