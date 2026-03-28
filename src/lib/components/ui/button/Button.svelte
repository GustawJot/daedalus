<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Variant, Tone, Size } from '../types.js';

	type ButtonVariant = Variant;
	type ButtonTone = Tone;
	type ButtonSize = Size;

	type Props = {
		variant?: ButtonVariant;
		tone?: ButtonTone;
		size?: ButtonSize;
		iconOnly?: boolean;
		children?: Snippet;
		class?: string;
		href?: string;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		[key: string]: unknown;
	};

	let {
		variant = 'filled',
		tone = 'neutral',
		size = 'md',
		iconOnly = false,
		children,
		class: className = '',
		href,
		disabled = false,
		type = 'button',
		...restProps
	}: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="button variant-{variant} tone-{tone} size-{size} {className}"
		class:icon-only={iconOnly}
		class:disabled
		aria-disabled={disabled || undefined}
		{...restProps}
	>
		{#if children}{@render children()}{/if}
	</a>
{:else}
	<button
		type={type}
		{disabled}
		class="button variant-{variant} tone-{tone} size-{size} {className}"
		class:icon-only={iconOnly}
		{...restProps}
	>
		{#if children}{@render children()}{/if}
	</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		white-space: nowrap;
		border-radius: var(--radius, 0.375rem);
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		transition-property: background-color, color, border-color, box-shadow, opacity;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		border: 1px solid transparent;
		text-decoration: none;
		outline: none;
		user-select: none;
		-webkit-user-select: none;
	}

	.button:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.button:disabled,
	.button.disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	/* ---- Variant: filled ---- */
	.variant-filled.tone-neutral {
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-neutral:hover {
		background-color: hsl(var(--primary) / 0.9);
	}

	.variant-filled.tone-critical {
		background-color: hsl(var(--destructive));
		color: hsl(var(--destructive-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-critical:hover {
		background-color: hsl(var(--destructive) / 0.9);
	}

	.variant-filled.tone-success {
		background-color: hsl(var(--success));
		color: hsl(var(--success-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-success:hover {
		background-color: hsl(var(--success) / 0.9);
	}

	.variant-filled.tone-caution {
		background-color: hsl(var(--caution));
		color: hsl(var(--caution-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-caution:hover {
		background-color: hsl(var(--caution) / 0.9);
	}

	.variant-filled.tone-info {
		background-color: hsl(var(--info));
		color: hsl(var(--info-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-info:hover {
		background-color: hsl(var(--info) / 0.9);
	}

	/* ---- Variant: tonal ---- */
	.variant-tonal.tone-neutral {
		background-color: hsl(var(--secondary));
		color: hsl(var(--secondary-foreground));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-tonal.tone-neutral:hover {
		background-color: hsl(var(--secondary) / 0.8);
	}

	.variant-tonal.tone-critical {
		background-color: hsl(var(--destructive) / 0.1);
		color: hsl(var(--destructive));
	}

	.variant-tonal.tone-critical:hover {
		background-color: hsl(var(--destructive) / 0.2);
	}

	.variant-tonal.tone-success {
		background-color: hsl(var(--success) / 0.1);
		color: hsl(var(--success));
	}

	.variant-tonal.tone-success:hover {
		background-color: hsl(var(--success) / 0.2);
	}

	.variant-tonal.tone-caution {
		background-color: hsl(var(--caution) / 0.1);
		color: hsl(var(--caution));
	}

	.variant-tonal.tone-caution:hover {
		background-color: hsl(var(--caution) / 0.2);
	}

	.variant-tonal.tone-info {
		background-color: hsl(var(--info) / 0.1);
		color: hsl(var(--info));
	}

	.variant-tonal.tone-info:hover {
		background-color: hsl(var(--info) / 0.2);
	}

	/* ---- Variant: outline ---- */
	.variant-outline {
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		border-color: hsl(var(--input));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-outline:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.variant-outline.tone-critical {
		color: hsl(var(--destructive));
		border-color: hsl(var(--destructive) / 0.5);
	}

	.variant-outline.tone-critical:hover {
		background-color: hsl(var(--destructive) / 0.1);
		color: hsl(var(--destructive));
	}

	.variant-outline.tone-success {
		color: hsl(var(--success));
		border-color: hsl(var(--success) / 0.5);
	}

	.variant-outline.tone-success:hover {
		background-color: hsl(var(--success) / 0.1);
		color: hsl(var(--success));
	}

	.variant-outline.tone-caution {
		color: hsl(var(--caution));
		border-color: hsl(var(--caution) / 0.5);
	}

	.variant-outline.tone-caution:hover {
		background-color: hsl(var(--caution) / 0.1);
		color: hsl(var(--caution));
	}

	.variant-outline.tone-info {
		color: hsl(var(--info));
		border-color: hsl(var(--info) / 0.5);
	}

	.variant-outline.tone-info:hover {
		background-color: hsl(var(--info) / 0.1);
		color: hsl(var(--info));
	}

	/* ---- Variant: ghost ---- */
	.variant-ghost {
		background-color: transparent;
		color: hsl(var(--foreground));
	}

	.variant-ghost:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.variant-ghost.tone-critical {
		color: hsl(var(--destructive));
	}

	.variant-ghost.tone-critical:hover {
		background-color: hsl(var(--destructive) / 0.1);
		color: hsl(var(--destructive));
	}

	/* ---- Variant: link ---- */
	.variant-link {
		background-color: transparent;
		color: hsl(var(--primary));
		text-decoration-line: underline;
		text-underline-offset: 4px;
	}

	.variant-link:hover {
		text-decoration-line: underline;
		opacity: 0.8;
	}

	.variant-link.tone-critical {
		color: hsl(var(--destructive));
	}

	/* ---- Sizes ---- */
	.size-md {
		height: 2.25rem;
		padding: 0.5rem 1rem;
	}

	.size-sm {
		height: 2rem;
		padding: 0.375rem 0.75rem;
		font-size: 0.8125rem;
		border-radius: var(--radius, 0.375rem);
	}

	.size-lg {
		height: 2.75rem;
		padding: 0.5rem 1.5rem;
		font-size: 1rem;
	}

	/* ---- Icon only ---- */
	.icon-only {
		height: 2.25rem;
		width: 2.25rem;
		padding: 0;
	}

	.icon-only.size-sm {
		height: 2rem;
		width: 2rem;
	}

	.icon-only.size-lg {
		height: 2.75rem;
		width: 2.75rem;
	}
</style>
