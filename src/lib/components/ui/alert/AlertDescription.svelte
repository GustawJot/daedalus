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

<div class="alert-description {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.alert-description {
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		line-height: 1.5;
		color: inherit;
		opacity: 0.9;
	}
</style>
