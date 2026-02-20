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

<span
	role="link"
	aria-disabled="true"
	aria-current="page"
	class="breadcrumb-page {className}"
>
	{#if children}{@render children()}{/if}
</span>

<style>
	.breadcrumb-page {
		font-family: var(--font-sans, system-ui, sans-serif);
		font-weight: 500;
		color: hsl(var(--foreground));
	}
</style>
