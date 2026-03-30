<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="drawer-footer {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.drawer-footer {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding-top: 0.5rem;
	}
</style>
