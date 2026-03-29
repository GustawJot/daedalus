<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="sheet-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sheet-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1-5);
	}
</style>
