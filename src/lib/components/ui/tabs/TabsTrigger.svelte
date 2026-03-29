<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = Omit<HTMLButtonAttributes, 'onclick'> & {
		value?: string;
		active?: boolean;
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		value = '',
		active = false,
		onclick,
		children,
		class: className = '',
		disabled = false,
		...restProps
	}: Props = $props();

	function handleClick() {
		if (onclick) {
			onclick();
		}
	}
</script>

<button
	type="button"
	role="tab"
	class="tabs-trigger {className}"
	class:active
	aria-selected={active}
	tabindex={active ? 0 : -1}
	data-state={active ? 'active' : 'inactive'}
	data-value={value}
	{disabled}
	onclick={handleClick}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.tabs-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		padding: 0.375rem 0.75rem;
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
		background: transparent;
		border: none;
		cursor: pointer;
		outline: none;
		transition-property: background-color, color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
		-webkit-user-select: none;
	}

	.tabs-trigger:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.tabs-trigger.active {
		background-color: var(--background);
		color: var(--foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}
</style>
