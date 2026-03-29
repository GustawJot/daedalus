<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="drawer-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.drawer-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1-5);
		text-align: center;
		padding: 0.5rem 0;
	}
</style>
