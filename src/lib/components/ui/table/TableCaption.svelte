<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		children?: Snippet;
		class?: string;
	}

	let {
		id,
		children,
		class: className = ''
	}: Props = $props();
</script>

<caption {id} class="table-caption {className}">
	{#if children}{@render children()}{/if}
</caption>

<style>
	.table-caption {
		margin-top: 1rem;
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
	}
</style>
