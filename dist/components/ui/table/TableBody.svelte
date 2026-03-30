<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLTableSectionElement> & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<tbody class="table-body {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</tbody>

<style>
	.table-body :global(tr:last-child) {
		border-bottom: none;
	}
</style>
