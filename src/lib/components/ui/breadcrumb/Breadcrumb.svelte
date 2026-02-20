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

<nav aria-label="Breadcrumb" class="breadcrumb {className}">
	{#if children}{@render children()}{/if}
</nav>

<style>
	.breadcrumb {
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
