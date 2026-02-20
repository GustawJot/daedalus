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

<div class="sidebar-group {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-group {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		padding: 0.25rem 0;
	}
</style>
