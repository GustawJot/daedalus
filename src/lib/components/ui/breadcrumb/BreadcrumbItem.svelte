<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = ''
	}: Props = $props();
</script>

<li class="breadcrumb-item {className}">
	{#if children}{@render children()}{/if}
</li>

<style>
	.breadcrumb-item {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
