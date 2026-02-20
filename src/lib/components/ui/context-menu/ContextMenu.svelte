<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		children?: Snippet<[{ open: boolean; close: () => void; x: number; y: number }]>;
	};

	let {
		open = $bindable(false),
		children
	}: Props = $props();

	let x = $state(0);
	let y = $state(0);

	function close() {
		open = false;
	}

	// Expose x and y via the snippet render props;
	// these will be set by ContextMenuTrigger's oncontextmenu handler
	export function openAt(cx: number, cy: number) {
		x = cx;
		y = cy;
		open = true;
	}
</script>

{#if children}
	{@render children({ open, close, x, y })}
{/if}
