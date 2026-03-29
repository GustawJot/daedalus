<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type Props = HTMLTableAttributes & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div class="table-wrapper">
	<table class="table {className}" {...restProps}>
		{#if children}{@render children()}{/if}
	</table>
</div>

<style>
	.table-wrapper {
		position: relative;
		width: 100%;
		overflow: auto;
	}

	.table {
		width: 100%;
		caption-side: bottom;
		border-collapse: collapse;
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		color: var(--foreground);
	}
</style>
