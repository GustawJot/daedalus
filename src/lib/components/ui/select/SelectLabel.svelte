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

<div {id} class="select-label {className}">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.select-label {
		padding: 0.375rem 0.5rem 0.375rem 2rem;
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
		user-select: none;
		-webkit-user-select: none;
	}
</style>
