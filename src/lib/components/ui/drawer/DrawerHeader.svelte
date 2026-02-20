<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="drawer-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.drawer-header {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		text-align: center;
		padding: 0.5rem 0;
	}
</style>
