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

<div class="sidebar-footer {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sidebar-footer {
		display: flex;
		align-items: center;
		padding: 0.75rem;
		border-top: 1px solid hsl(var(--border));
		flex-shrink: 0;
		min-height: 3.5rem;
		overflow: hidden;
	}
</style>
