<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		value?: string;
		children?: Snippet<[{ value: string; set: (v: string) => void }]>;
	};

	let {
		value = $bindable(''),
		children
	}: Props = $props();

	function set(v: string) {
		value = v;
	}
</script>

<div role="group">
	{#if children}
		{@render children({ value, set })}
	{/if}
</div>

<style>
	div {
		display: contents;
	}
</style>
