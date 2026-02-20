<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<p class="sheet-description {className}">
	{#if children}{@render children()}{/if}
</p>

<style>
	.sheet-description {
		font-size: 0.875rem;
		line-height: 1.5;
		color: hsl(var(--muted-foreground));
		margin: 0;
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
