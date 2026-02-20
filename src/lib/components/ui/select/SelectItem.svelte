<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		value: string;
		disabled?: boolean;
		selected?: boolean;
		onclick?: (value: string) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		value,
		disabled = false,
		selected = false,
		onclick,
		children,
		class: className = ''
	}: Props = $props();

	function handleClick() {
		if (disabled) return;
		onclick?.(value);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
	}
</script>

<div
	class="select-item {className}"
	class:disabled
	class:selected
	role="option"
	aria-selected={selected}
	aria-disabled={disabled || undefined}
	tabindex={disabled ? -1 : 0}
	onclick={handleClick}
	onkeydown={handleKeydown}
>
	<span class="select-item-indicator">
		{#if selected}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="select-item-check"
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		{/if}
	</span>
	<span class="select-item-text">
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</span>
</div>

<style>
	.select-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.375rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		cursor: pointer;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
		color: hsl(var(--foreground));
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.select-item:hover:not(.disabled),
	.select-item:focus-visible:not(.disabled) {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.select-item.disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	.select-item.selected {
		font-weight: 500;
	}

	.select-item-indicator {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
	}

	.select-item-check {
		width: 0.875rem;
		height: 0.875rem;
		color: hsl(var(--primary));
	}

	.select-item-text {
		flex: 1;
	}
</style>
