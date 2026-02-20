<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		openDelay?: number;
		closeDelay?: number;
		children?: Snippet<[{ open: boolean; show: () => void; hide: () => void }]>;
	};

	let {
		open = $bindable(false),
		openDelay = 200,
		closeDelay = 100,
		children
	}: Props = $props();

	let openTimeoutId: ReturnType<typeof setTimeout> | null = null;
	let closeTimeoutId: ReturnType<typeof setTimeout> | null = null;

	function show() {
		if (closeTimeoutId) {
			clearTimeout(closeTimeoutId);
			closeTimeoutId = null;
		}
		openTimeoutId = setTimeout(() => {
			open = true;
		}, openDelay);
	}

	function hide() {
		if (openTimeoutId) {
			clearTimeout(openTimeoutId);
			openTimeoutId = null;
		}
		closeTimeoutId = setTimeout(() => {
			open = false;
		}, closeDelay);
	}
</script>

{#if children}
	{@render children({ open, show, hide })}
{/if}
