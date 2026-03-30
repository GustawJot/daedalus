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

<div class="card-header {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.card-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1-5);
		padding: 1.5rem;
	}
</style>
