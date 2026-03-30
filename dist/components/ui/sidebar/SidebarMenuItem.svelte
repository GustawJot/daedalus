<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setContext } from 'svelte';

	type Props = {
		id?: string;
		open?: boolean;
		children?: Snippet;
		class?: string;
	};

	let { id, open = $bindable(), children, class: className = '' }: Props = $props();

	const state = $state({ open: false, collapsible: false });

	$effect.pre(() => {
		state.collapsible = open !== undefined;
		state.open = open ?? false;
	});

	function toggle() {
		open = !open;
	}

	setContext('sidebar-menu-item', { state, toggle });
</script>

<li {id} class="sidebar-menu-item {className}">
	{#if children}{@render children()}{/if}
</li>

<style>
	.sidebar-menu-item {
		list-style: none;
	}
</style>
