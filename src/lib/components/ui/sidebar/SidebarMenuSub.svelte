<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getContext, setContext } from 'svelte';
	import CollapsibleContent from '../collapsible/CollapsibleContent.svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();

	const menuItemCtx = getContext<{
		state: { open: boolean; collapsible: boolean };
		toggle: () => void;
	}>('sidebar-menu-item');

	setContext('sidebar-menu-sub', true);
</script>

<CollapsibleContent open={menuItemCtx.state.open}>
	<ul {id} class="sidebar-menu-sub {className}">
		{#if children}{@render children()}{/if}
	</ul>
</CollapsibleContent>

<style>
	.sidebar-menu-sub {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		list-style: none;
		margin: 0;
		padding: 4px 0 4px 0;
		margin-left: 1rem;
		padding-left: 0.75rem;
		border-left: 1px solid var(--border);
	}
</style>
