<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		children,
		class: className = ''
	}: Props = $props();
</script>

<nav {id} aria-label="Breadcrumb" class="breadcrumb {className}">
	{#if children}{@render children()}{/if}
</nav>
