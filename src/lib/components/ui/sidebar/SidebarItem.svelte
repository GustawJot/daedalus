<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getContext } from 'svelte';

	type MenuItemContext = {
		state: { open: boolean; collapsible: boolean };
		toggle: () => void;
	};

	type Props = {
		id?: string;
		href?: string;
		active?: boolean;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		href,
		active = false,
		disabled = false,
		onclick,
		children,
		class: className = ''
	}: Props = $props();

	const menuItemCtx = getContext<MenuItemContext | undefined>('sidebar-menu-item');
	const inSub = getContext<true | undefined>('sidebar-menu-sub');

	const isTrigger = $derived(!!(menuItemCtx?.state.collapsible && !inSub));

	function handleClick(e: MouseEvent) {
		if (isTrigger) {
			menuItemCtx!.toggle();
		}
		onclick?.(e);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (isTrigger && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			menuItemCtx!.toggle();
		}
	}
</script>

{#if href && !disabled}
	<a
		{id}
		{href}
		class="sidebar-item {className}"
		class:active
		aria-current={active ? 'page' : undefined}
		{onclick}
	>
		{#if children}{@render children()}{/if}
	</a>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		{id}
		class="sidebar-item {className}"
		class:active
		class:disabled
		role="button"
		tabindex={disabled ? -1 : 0}
		aria-disabled={disabled || undefined}
		aria-expanded={isTrigger ? menuItemCtx?.state.open : undefined}
		onclick={handleClick}
		onkeydown={handleKeydown}
	>
		{#if children}{@render children()}{/if}
		{#if isTrigger}
			<svg
				class="sidebar-item-chevron"
				class:open={menuItemCtx?.state.open}
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="m9 18 6-6-6-6" />
			</svg>
		{/if}
	</div>
{/if}

<style>
	.sidebar-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 6px 12px;
		border-radius: var(--radius);
		font-size: var(--text-xs);
		color: var(--foreground);
		text-decoration: none;
		cursor: pointer;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
		overflow: hidden;
		white-space: nowrap;
		outline: none;

	}

	.sidebar-item:hover:not(.disabled) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.sidebar-item:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: -2px;
	}

	.sidebar-item.active {
		background-color: var(--accent);
		color: var(--accent-foreground);
		font-weight: var(--font-medium);
	}

	.sidebar-item.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.sidebar-item :global(svg) {
		flex-shrink: 0;
		width: 1rem;
		height: 1rem;
	}

	.sidebar-item-chevron {
		margin-left: auto;
		transition: transform var(--transition-fast, 150ms) ease;
		opacity: 0.5;
	}

	.sidebar-item-chevron.open {
		transform: rotate(90deg);
	}
</style>
