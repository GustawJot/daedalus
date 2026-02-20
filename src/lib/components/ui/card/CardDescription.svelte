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
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: hsl(var(--muted-foreground));
		margin: 0;
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
