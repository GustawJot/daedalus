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

<tfoot class="table-footer {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</tfoot>

<style>
	.table-footer {
		border-top: 1px solid var(--border);
		background-color: color-mix(in srgb, var(--muted) 50%, transparent);
		font-weight: var(--font-medium);
	}

	.table-footer :global(tr:last-child) {
		border-bottom: none;
	}
</style>
