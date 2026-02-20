<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		children?: Snippet;
		class?: string;
	};

	let {
		href,
		children,
		class: className = ''
	}: Props = $props();
</script>

<a {href} class="breadcrumb-link {className}">
	{#if children}{@render children()}{/if}
</a>

<style>
	.breadcrumb-link {
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--muted-foreground));
		text-decoration: none;
		transition: color var(--transition-fast, 150ms) ease;
	}

	.breadcrumb-link:hover {
		color: hsl(var(--foreground));
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.breadcrumb-link:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
		border-radius: 2px;
	}
</style>
