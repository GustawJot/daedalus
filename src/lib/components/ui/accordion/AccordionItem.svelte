<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		value?: string;
		open?: boolean;
		children?: Snippet<[{ open: boolean; toggle: () => void }]>;
		class?: string;
	};

	let {
		value = '',
		open = $bindable(false),
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	function toggle() {
		open = !open;
	}
</script>

<div
	class="accordion-item {className}"
	data-state={open ? 'open' : 'closed'}
	data-value={value}
	{...restProps}
>
	{#if children}{@render children({ open, toggle })}{/if}
</div>

<style>
	.accordion-item {
		border-bottom: 1px solid hsl(var(--border));
	}
</style>
