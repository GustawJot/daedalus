<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLTableRowElement> & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<tr class="table-row {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</tr>

<style>
	.table-row {
		border-bottom: 1px solid hsl(var(--border));
		transition: background-color var(--transition-fast, 150ms);
	}

	.table-row:hover {
		background-color: hsl(var(--muted) / 0.5);
	}

	.table-row[data-state='selected'] {
		background-color: hsl(var(--muted));
	}
</style>
