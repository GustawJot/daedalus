<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLParagraphElement> & {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<p class="card-description {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</p>

<style>
	.card-description {
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
	}
</style>
