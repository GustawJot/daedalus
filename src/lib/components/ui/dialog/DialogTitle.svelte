<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<h2 {id} class="dialog-title {className}">
	{#if children}{@render children()}{/if}
</h2>

<style>
	.dialog-title {
		font-size: var(--text-lg);
		font-weight: var(--font-semibold);
		line-height: var(--leading-snug);
		letter-spacing: -0.01em;
		color: var(--foreground);
	}
</style>
