<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		disabled?: boolean;
		destructive?: boolean;
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		disabled = false,
		destructive = false,
		onclick,
		children,
		class: className = ''
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
	class="contextmenu-item {className}"
	class:destructive
	class:disabled
	role="menuitem"
	tabindex={disabled ? -1 : 0}
	aria-disabled={disabled || undefined}
	onclick={() => !disabled && onclick?.()}
	onkeydown={handleKeydown}
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.contextmenu-item {
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

	.contextmenu-item:hover,
	.contextmenu-item:focus-visible {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.contextmenu-item:focus-visible {
		outline: none;
	}

	.contextmenu-item.destructive {
		color: hsl(var(--destructive));
	}

	.contextmenu-item.destructive:hover,
	.contextmenu-item.destructive:focus-visible {
		background-color: hsl(var(--destructive));
		color: hsl(var(--destructive-foreground));
	}

	.contextmenu-item.disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
