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

<div class="command-empty {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.command-empty {
		padding: 1.5rem;
		text-align: center;
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		color: hsl(var(--muted-foreground));
	}
</style>
