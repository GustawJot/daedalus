<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = ''
	}: Props = $props();
</script>

<div class="sidebar-group-label {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-group-label {
		padding: 0.375rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: hsl(var(--muted-foreground));
		letter-spacing: 0.02em;
		text-transform: uppercase;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
