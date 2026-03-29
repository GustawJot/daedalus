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

<div {id} class="sidebar-footer {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-footer {
		display: flex;
		align-items: center;
		padding: 0.75rem;
		border-top: 1px solid var(--border);
		flex-shrink: 0;
		min-height: 3.5rem;
		overflow: hidden;
	}
</style>
