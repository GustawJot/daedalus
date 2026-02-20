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

<div class="command {className}" role="dialog" aria-label="Command palette">
	{#if children}{@render children()}{/if}
</div>

<style>
	.command {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius, 0.5rem);
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
