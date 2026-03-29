<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		href?: string;
		active?: boolean;
		disabled?: boolean;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		href,
		active = false,
		disabled = false,
		children,
		class: className = ''
	}: Props = $props();
</script>

{#if href && !disabled}
	<a
		{id}
		{href}
		class="sidebar-item {className}"
		class:active
		aria-current={active ? 'page' : undefined}
	>
		{#if children}{@render children()}{/if}
	</a>
{:else}
	<div
		{id}
		class="sidebar-item {className}"
		class:active
		class:disabled
		role="button"
		tabindex={disabled ? -1 : 0}
		aria-disabled={disabled || undefined}
	>
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.sidebar-item {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius, 0.375rem);
		font-size: var(--text-sm);
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
</style>
