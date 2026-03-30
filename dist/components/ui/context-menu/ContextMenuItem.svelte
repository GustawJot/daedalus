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
	class="contextmenu-item tone-{tone} {className}"
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
	.contextmenu-item {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		padding: 0.375rem 0.5rem;
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		cursor: pointer;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
		transition: background-color var(--transition-fast, 150ms) ease,
			color var(--transition-fast, 150ms) ease;
	}

	.contextmenu-item:hover,
	.contextmenu-item:focus-visible {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.contextmenu-item:focus-visible {
		outline: none;
	}

	.contextmenu-item.tone-critical {
		color: var(--destructive);
	}

	.contextmenu-item.tone-critical:hover,
	.contextmenu-item.tone-critical:focus-visible {
		background-color: var(--destructive);
		color: var(--destructive-foreground);
	}

	.contextmenu-item.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
