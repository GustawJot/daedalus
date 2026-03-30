<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		onclose?: () => void;
		children?: Snippet<[{ close: () => void }]>;
	};

	let {
		open = $bindable(false),
		onclose,
		children
	}: Props = $props();

	function close() {
		open = false;
		onclose?.();
	}
</script>

{#if children}
	{@render children({ close })}
{/if}
