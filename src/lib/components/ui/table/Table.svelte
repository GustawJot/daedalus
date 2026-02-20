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
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--foreground));
	}
</style>
