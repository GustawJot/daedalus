<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		value?: string;
		children?: Snippet<[{ value: string; set: (v: string) => void }]>;
	};

	let {
		id,
		value = $bindable(''),
		children
	}: Props = $props();

	function set(v: string) {
		value = v;
	}
</script>

<div {id} role="group">
	{#if children}
		{@render children({ value, set })}
	{/if}
</div>

<style>
	div {
		display: contents;
	}
</style>
