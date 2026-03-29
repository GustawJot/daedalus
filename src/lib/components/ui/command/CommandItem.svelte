<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		value?: string;
		disabled?: boolean;
		onselect?: (value: string) => void;
		keywords?: string[];
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		value = '',
		disabled = false,
		onselect,
		keywords = [],
		children,
		class: className = ''
	}: Props = $props();

	function handleClick() {
		if (!disabled) {
			onselect?.(value);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	{id}
	class="command-item {className}"
	class:disabled
	role="option"
	aria-disabled={disabled}
	aria-selected="false"
	data-value={value}
	data-keywords={keywords.join(',')}
	tabindex={disabled ? -1 : 0}
	onclick={handleClick}
	onkeydown={handleKeydown}
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.command-item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: 0.375rem 0.5rem;
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		font-size: var(--text-sm);
		cursor: pointer;
		outline: none;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
		user-select: none;
		-webkit-user-select: none;
	}

	.command-item:hover:not(.disabled),
	.command-item:focus-visible:not(.disabled) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.command-item:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: -2px;
	}

	.command-item.disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
