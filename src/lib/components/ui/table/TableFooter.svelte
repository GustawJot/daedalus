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
		border-top: 1px solid hsl(var(--border));
		background-color: hsl(var(--muted) / 0.5);
		font-weight: 500;
	}

	.table-footer :global(tr:last-child) {
		border-bottom: none;
	}
</style>
