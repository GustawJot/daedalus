<script lang="ts">
	import type { Snippet } from 'svelte';

	export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

	type Props = {
		open?: boolean;
		side?: SheetSide;
		onclose?: () => void;
		children?: Snippet<[{ close: () => void }]>;
	};

	let {
		open = $bindable(false),
		side = 'right',
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
