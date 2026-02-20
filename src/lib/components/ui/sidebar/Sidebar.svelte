<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		width?: string;
		collapsedWidth?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		open = $bindable(true),
		width = '16rem',
		collapsedWidth = '3.5rem',
		children,
		class: className = ''
	}: Props = $props();
</script>

<aside
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
		width: var(--sidebar-width, 16rem);
		height: 100%;
		background-color: hsl(var(--background));
		border-right: 1px solid hsl(var(--border));
		font-family: var(--font-sans, system-ui, sans-serif);
		transition: width var(--transition-normal, 200ms) ease;
		overflow: hidden;
		flex-shrink: 0;
	}

	.sidebar.collapsed {
		width: var(--sidebar-collapsed-width, 3.5rem);
	}
</style>
