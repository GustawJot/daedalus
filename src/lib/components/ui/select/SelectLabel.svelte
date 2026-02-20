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

<div class="select-label {className}">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.select-label {
		padding: 0.375rem 0.5rem 0.375rem 2rem;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.25rem;
		color: hsl(var(--muted-foreground));
		user-select: none;
		-webkit-user-select: none;
	}
</style>
