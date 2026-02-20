<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLThAttributes } from 'svelte/elements';

	type Props = HTMLThAttributes & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<th class="table-head {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</th>

<style>
	.table-head {
		height: 3rem;
		padding: 0 1rem;
		text-align: left;
		vertical-align: middle;
		font-weight: 500;
		color: hsl(var(--muted-foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
		white-space: nowrap;
	}

	.table-head[align='center'] {
		text-align: center;
	}

	.table-head[align='right'] {
		text-align: right;
	}
</style>
