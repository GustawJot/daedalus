<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		value?: string;
		checked?: boolean;
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		value = '',
		checked = false,
		onclick,
		children,
		class: className = ''
	}: Props = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onclick?.();
		}
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	{id}
	class="dropdown-radio-item {className}"
	role="menuitemradio"
	aria-checked={checked}
	tabindex="0"
	onclick={onclick}
	onkeydown={handleKeydown}
>
	<span class="dropdown-radio-indicator">
		{#if checked}
			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
				<circle cx="12" cy="12" r="6" />
			</svg>
		{/if}
	</span>
	{#if children}{@render children()}{/if}
</div>

<style>
	.dropdown-radio-item {
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

	.dropdown-radio-item:hover,
	.dropdown-radio-item:focus-visible {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.dropdown-radio-item:focus-visible {
		outline: none;
	}

	.dropdown-radio-indicator {
		position: absolute;
		left: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1rem;
	}
</style>
