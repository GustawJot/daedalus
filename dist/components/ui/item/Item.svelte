<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		active?: boolean;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		active = false,
		disabled = false,
		onclick,
		children,
		class: className = ''
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	{id}
	class="item {className}"
	class:active
	class:disabled
	role="button"
	tabindex={disabled ? -1 : 0}
	aria-disabled={disabled || undefined}
	onclick={(e) => {
		if (!disabled) onclick?.(e);
	}}
	onkeydown={(e) => {
		if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			const mouseEvent = new MouseEvent('click', { bubbles: true });
			onclick?.(mouseEvent);
		}
	}}
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-3);
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius, 0.375rem);
		font-size: var(--text-sm);
		color: var(--foreground);
		cursor: pointer;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
	}

	.item:hover:not(.disabled) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.item:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: -2px;
	}

	.item.active {
		background-color: var(--accent);
		color: var(--accent-foreground);
		font-weight: var(--font-medium);
	}

	.item.disabled {
		opacity: 0.5;
		pointer-events: none;
		cursor: default;
	}
</style>
