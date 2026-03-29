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

<div class="card {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.card {
		border-radius: var(--radius, 0.375rem);
		border: 1px solid var(--border);
		background-color: var(--background);
		color: var(--foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}
</style>
