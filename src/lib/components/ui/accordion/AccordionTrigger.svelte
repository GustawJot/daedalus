<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = Omit<HTMLButtonAttributes, 'onclick'> & {
		open?: boolean;
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		open = false,
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

<h3 class="accordion-trigger-heading">
	<button
		type="button"
		class="accordion-trigger {className}"
		aria-expanded={open}
		{disabled}
		onclick={handleClick}
		{...restProps}
	>
		<span class="accordion-trigger-text">
			{#if children}{@render children()}{/if}
		</span>
		<svg
			class="accordion-chevron"
			class:rotated={open}
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="m6 9 6 6 6-6" />
		</svg>
	</button>
</h3>

<style>
	.accordion-trigger-heading {
		display: flex;
		margin: 0;
		font-size: inherit;
		font-weight: inherit;
	}

	.accordion-trigger {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--foreground));
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		width: 100%;
		outline: none;
		transition: text-decoration-color var(--transition-fast, 150ms);
	}

	.accordion-trigger:hover {
		text-decoration: underline;
	}

	.accordion-trigger:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
		border-radius: 2px;
	}

	.accordion-trigger:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.accordion-trigger-text {
		flex: 1;
		text-align: left;
	}

	.accordion-chevron {
		flex-shrink: 0;
		transition: transform var(--transition-normal, 200ms) ease;
	}

	.accordion-chevron.rotated {
		transform: rotate(180deg);
	}
</style>
