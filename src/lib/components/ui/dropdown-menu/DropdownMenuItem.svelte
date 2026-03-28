<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		disabled?: boolean;
		tone?: 'neutral' | 'critical';
		onclick?: () => void;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		disabled = false,
		tone = 'neutral',
		onclick,
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			if (!disabled) {
				onclick?.();
			}
		}
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="dropdown-item tone-{tone} {className}"
	class:disabled
	role="menuitem"
	tabindex={disabled ? -1 : 0}
	aria-disabled={disabled || undefined}
	onclick={() => !disabled && onclick?.()}
	onkeydown={handleKeydown}
	{...restProps}
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.dropdown-item {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		padding: 0.375rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		cursor: pointer;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
		transition: background-color var(--transition-fast, 150ms) ease,
			color var(--transition-fast, 150ms) ease;
	}

	.dropdown-item:hover,
	.dropdown-item:focus-visible {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.dropdown-item:focus-visible {
		outline: none;
	}

	.dropdown-item.tone-critical {
		color: hsl(var(--destructive));
	}

	.dropdown-item.tone-critical:hover,
	.dropdown-item.tone-critical:focus-visible {
		background-color: hsl(var(--destructive));
		color: hsl(var(--destructive-foreground));
	}

	.dropdown-item.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
