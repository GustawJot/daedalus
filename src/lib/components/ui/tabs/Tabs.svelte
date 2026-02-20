<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		value?: string;
		children?: Snippet<[{ value: string; set: (v: string) => void }]>;
		class?: string;
	}

	let {
		value = $bindable(''),
		children,
		class: className = ''
	}: Props = $props();

	function set(v: string) {
		value = v;
	}
</script>

<div class="tabs {className}" data-orientation="horizontal">
	{#if children}{@render children({ value, set })}{/if}
</div>

<style>
	.tabs {
		width: 100%;
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
