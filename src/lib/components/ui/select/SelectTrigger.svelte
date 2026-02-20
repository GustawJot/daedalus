<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		placeholder?: string;
		disabled?: boolean;
		value?: string;
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		placeholder = 'Select...',
		disabled = false,
		value,
		onclick,
		children,
		class: className = ''
	}: Props = $props();
</script>

<button
	type="button"
	class="select-trigger {className}"
	{disabled}
	onclick={onclick}
	aria-haspopup="listbox"
>
	<span class="select-trigger-text" class:placeholder={!value}>
		{#if children}
			{@render children()}
		{:else if value}
			{value}
		{:else}
			{placeholder}
		{/if}
	</span>
	<svg
		class="select-chevron"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<polyline points="6 9 12 15 18 9" />
	</svg>
</button>

<style>
	.select-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		width: 100%;
		min-width: 10rem;
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		border-radius: var(--radius, 0.375rem);
		border: 1px solid hsl(var(--input));
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		cursor: pointer;
		outline: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		transition-property: border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.select-trigger:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.select-trigger:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.select-trigger-text {
		flex: 1;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.select-trigger-text.placeholder {
		color: hsl(var(--muted-foreground));
	}

	.select-chevron {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		color: hsl(var(--muted-foreground));
	}
</style>
