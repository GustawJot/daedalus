<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="dropdown-label {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.dropdown-label {
		padding: 0.375rem 0.5rem;
		font-size: var(--text-sm);
		font-weight: var(--font-semibold);
		line-height: var(--leading-sm);
		color: var(--foreground);
	}
</style>
