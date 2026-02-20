<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div class="card-content {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.card-content {
		padding: 1.5rem;
		padding-top: 0;
	}
</style>
