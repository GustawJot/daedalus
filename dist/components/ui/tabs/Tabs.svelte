<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		value?: string;
		children?: Snippet<[{ value: string; set: (v: string) => void }]>;
		class?: string;
	}

	let {
		id,
		value = $bindable(''),
		children,
		class: className = ''
	}: Props = $props();

	function set(v: string) {
		value = v;
	}
</script>

<div {id} class="tabs {className}" data-orientation="horizontal">
	{#if children}{@render children({ value, set })}{/if}
</div>

<style>
	.tabs {
		width: 100%;
	}
</style>
