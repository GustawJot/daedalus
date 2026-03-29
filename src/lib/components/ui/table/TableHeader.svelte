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

<thead class="table-header {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</thead>

<style>
	.table-header {
		border-bottom: 1px solid var(--border);
	}

	.table-header :global(tr) {
		border-bottom: none;
	}
</style>
