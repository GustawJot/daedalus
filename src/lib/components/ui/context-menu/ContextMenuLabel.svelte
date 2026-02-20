<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="contextmenu-label {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.contextmenu-label {
		padding: 0.375rem 0.5rem;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.25rem;
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
