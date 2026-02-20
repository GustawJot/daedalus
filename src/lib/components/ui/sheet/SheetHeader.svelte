<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="sheet-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sheet-header {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
</style>
