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

<div class="accordion {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.accordion {
		width: 100%;
	}
</style>
