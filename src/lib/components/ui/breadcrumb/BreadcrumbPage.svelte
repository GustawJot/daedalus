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

<span
	{id}
	role="link"
	aria-disabled="true"
	aria-current="page"
	class="breadcrumb-page {className}"
>
	{#if children}{@render children()}{/if}
</span>

<style>
	.breadcrumb-page {
		font-weight: var(--font-medium);
		color: var(--foreground);
	}
</style>
