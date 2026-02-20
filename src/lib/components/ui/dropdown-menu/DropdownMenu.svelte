<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		children?: Snippet<[{ open: boolean; close: () => void; toggle: () => void }]>;
	};

	let {
		open = $bindable(false),
		children
	}: Props = $props();

	function close() {
		open = false;
	}

	function toggle() {
		open = !open;
	}
</script>

{#if children}
	{@render children({ open, close, toggle })}
{/if}
