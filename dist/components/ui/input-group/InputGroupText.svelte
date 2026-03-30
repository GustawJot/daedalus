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

<span {id} class="input-group-text {className}">
	{#if children}
		{@render children()}
	{/if}
</span>

<style>
	.input-group-text {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 0.75rem;
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
		background-color: var(--muted);
		border: 1px solid var(--input);
		border-radius: var(--radius, 0.375rem);
		white-space: nowrap;
		user-select: none;
		-webkit-user-select: none;
	}
</style>
