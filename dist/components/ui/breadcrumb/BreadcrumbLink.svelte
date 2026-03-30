<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		href: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		href,
		children,
		class: className = ''
	}: Props = $props();
</script>

<a {id} {href} class="breadcrumb-link {className}">
	{#if children}{@render children()}{/if}
</a>

<style>
	.breadcrumb-link {
		color: var(--muted-foreground);
		text-decoration: none;
		transition: color var(--transition-fast, 150ms) ease;
	}

	.breadcrumb-link:hover {
		color: var(--foreground);
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.breadcrumb-link:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
		border-radius: 2px;
	}
</style>
