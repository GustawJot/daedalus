<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<h2 class="alertdialog-title {className}">
	{#if children}{@render children()}{/if}
</h2>

<style>
	.alertdialog-title {
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.4;
		letter-spacing: -0.01em;
		color: hsl(var(--foreground));
		margin: 0;
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
