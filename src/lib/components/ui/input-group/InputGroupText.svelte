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

<span class="input-group-text {className}">
	{#if children}
		{@render children()}
	{/if}
</span>

<style>
	.input-group-text {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--muted-foreground));
		background-color: hsl(var(--muted));
		border: 1px solid hsl(var(--input));
		border-radius: var(--radius, 0.375rem);
		white-space: nowrap;
		user-select: none;
		-webkit-user-select: none;
	}
</style>
