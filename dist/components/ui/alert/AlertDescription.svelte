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

<div class="alert-description {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.alert-description {
		font-size: var(--text-sm);
		color: inherit;
		opacity: 0.9;
	}
</style>
