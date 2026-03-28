<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<h5 class="alert-title {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</h5>

<style>
	.alert-title {
		margin: 0 0 0.25rem 0;
		font-family: var(--font-sans, system-ui, sans-serif);
		font-weight: 600;
		font-size: 0.875rem;
		line-height: 1.25;
		letter-spacing: -0.01em;
		color: inherit;
	}
</style>
