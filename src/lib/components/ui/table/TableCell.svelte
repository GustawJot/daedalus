<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLTdAttributes } from 'svelte/elements';

	type Props = HTMLTdAttributes & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<td class="table-cell {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</td>

<style>
	.table-cell {
		padding: 0.75rem 1rem;
		vertical-align: middle;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.table-cell[align='center'] {
		text-align: center;
	}

	.table-cell[align='right'] {
		text-align: right;
	}
</style>
