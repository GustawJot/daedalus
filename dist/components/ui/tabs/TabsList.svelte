<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div class="tabs-list {className}" role="tablist" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.tabs-list {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius, 0.375rem);
		background-color: var(--muted);
		padding: 0.25rem;
		color: var(--muted-foreground);
		gap: var(--space-1);
	}
</style>
