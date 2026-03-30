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
		padding: 8px 12px;
		font-size: var(--text-2xs);
		color: var(--secondary);
		letter-spacing: 0.025rem;
		text-transform: uppercase;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
