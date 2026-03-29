<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		children,
		class: className = ''
	}: Props = $props();
</script>

<li {id} class="breadcrumb-item {className}">
	{#if children}{@render children()}{/if}
</li>

<style>
	.breadcrumb-item {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1-5);
	}
</style>
