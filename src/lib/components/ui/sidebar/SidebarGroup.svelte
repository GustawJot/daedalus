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

<div {id} class="sidebar-group {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}
</style>
