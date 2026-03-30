<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		open?: boolean;
		children?: Snippet<[{ open: boolean; toggle: () => void }]>;
		class?: string;
	};

	let {
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
	class="collapsible {className}"
	data-state={open ? 'open' : 'closed'}
	{...restProps}
>
	{#if children}{@render children({ open, toggle })}{/if}
</div>

<style>
	.collapsible {
		width: 100%;
	}
</style>
