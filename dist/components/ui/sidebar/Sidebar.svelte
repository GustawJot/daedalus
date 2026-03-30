<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		open?: boolean;
		width?: string;
		collapsedWidth?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		open = $bindable(true),
		width = '250px',
		collapsedWidth = '3.5rem',
		children,
		class: className = ''
	}: Props = $props();
</script>

<aside
	{id}
	class="sidebar {className}"
	class:collapsed={!open}
	style:--sidebar-width={width}
	style:--sidebar-collapsed-width={collapsedWidth}
	aria-label="Sidebar"
>
	{#if children}{@render children()}{/if}
</aside>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		width: var(--sidebar-width);
		height: 100%;
		border-right: 1px solid var(--border);
		transition: width var(--transition-normal, 200ms) ease;
		overflow: hidden;
		flex-shrink: 0;
	}

	.sidebar.collapsed {
		width: var(--sidebar-collapsed-width, 3.5rem);
	}
</style>
