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

<div {id} class="sidebar-group-label {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-group-label {
		padding: 0.375rem 0.5rem;
		font-size: var(--text-xs);
		font-weight: var(--font-medium);
		color: var(--muted-foreground);
		letter-spacing: 0.02em;
		text-transform: uppercase;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
