<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		checked?: boolean;
		disabled?: boolean;
		onchange?: (checked: boolean) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		checked = $bindable(false),
		disabled = false,
		onchange,
		children,
		class: className = ''
	}: Props = $props();

	function toggle() {
		if (disabled) return;
		checked = !checked;
		onchange?.(checked);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggle();
		}
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	{id}
	class="contextmenu-checkbox-item {className}"
	class:disabled
	role="menuitemcheckbox"
	aria-checked={checked}
	aria-disabled={disabled || undefined}
	tabindex={disabled ? -1 : 0}
	onclick={toggle}
	onkeydown={handleKeydown}
>
	<span class="contextmenu-checkbox-indicator">
		{#if checked}
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M20 6 9 17l-5-5" />
			</svg>
		{/if}
	</span>
	{#if children}{@render children()}{/if}
</div>

<style>
	.contextmenu-checkbox-item {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		padding: 0.375rem 0.5rem;
		padding-left: 2rem;
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		cursor: pointer;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
		transition: background-color var(--transition-fast, 150ms) ease,
			color var(--transition-fast, 150ms) ease;
	}

	.contextmenu-checkbox-item:hover,
	.contextmenu-checkbox-item:focus-visible {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.contextmenu-checkbox-item:focus-visible {
		outline: none;
	}

	.contextmenu-checkbox-item.disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.contextmenu-checkbox-indicator {
		position: absolute;
		left: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1rem;
	}
</style>
