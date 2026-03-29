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
		gap: var(--space-2);
		white-space: nowrap;
		border-radius: var(--radius, 0.375rem);
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		line-height: var(--leading-sm);
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

	.button:disabled,
	.button.disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	/* ---- Variant: filled ---- */
	.variant-filled.tone-neutral {
		background-color: var(--primary);
		color: var(--primary-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-neutral:hover {
		background-color: color-mix(in srgb, var(--primary) 90%, transparent);
	}

	.variant-filled.tone-critical {
		background-color: var(--destructive);
		color: var(--destructive-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-critical:hover {
		background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
	}

	.variant-filled.tone-success {
		background-color: var(--success);
		color: var(--success-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-success:hover {
		background-color: color-mix(in srgb, var(--success) 90%, transparent);
	}

	.variant-filled.tone-caution {
		background-color: var(--caution);
		color: var(--caution-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-caution:hover {
		background-color: color-mix(in srgb, var(--caution) 90%, transparent);
	}

	.variant-filled.tone-info {
		background-color: var(--info);
		color: var(--info-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-filled.tone-info:hover {
		background-color: color-mix(in srgb, var(--info) 90%, transparent);
	}

	/* ---- Variant: tonal ---- */
	.variant-tonal.tone-neutral {
		background-color: var(--secondary);
		color: var(--secondary-foreground);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-tonal.tone-neutral:hover {
		background-color: color-mix(in srgb, var(--secondary) 80%, transparent);
	}

	.variant-tonal.tone-critical {
		background-color: color-mix(in srgb, var(--destructive) 10%, transparent);
		color: var(--destructive);
	}

	.variant-tonal.tone-critical:hover {
		background-color: color-mix(in srgb, var(--destructive) 20%, transparent);
	}

	.variant-tonal.tone-success {
		background-color: color-mix(in srgb, var(--success) 10%, transparent);
		color: var(--success);
	}

	.variant-tonal.tone-success:hover {
		background-color: color-mix(in srgb, var(--success) 20%, transparent);
	}

	.variant-tonal.tone-caution {
		background-color: color-mix(in srgb, var(--caution) 10%, transparent);
		color: var(--caution);
	}

	.variant-tonal.tone-caution:hover {
		background-color: color-mix(in srgb, var(--caution) 20%, transparent);
	}

	.variant-tonal.tone-info {
		background-color: color-mix(in srgb, var(--info) 10%, transparent);
		color: var(--info);
	}

	.variant-tonal.tone-info:hover {
		background-color: color-mix(in srgb, var(--info) 20%, transparent);
	}

	/* ---- Variant: outline ---- */
	.variant-outline {
		background-color: var(--background);
		color: var(--foreground);
		border-color: var(--input);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}

	.variant-outline:hover {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.variant-outline.tone-critical {
		color: var(--destructive);
		border-color: color-mix(in srgb, var(--destructive) 50%, transparent);
	}

	.variant-outline.tone-critical:hover {
		background-color: color-mix(in srgb, var(--destructive) 10%, transparent);
		color: var(--destructive);
	}

	.variant-outline.tone-success {
		color: var(--success);
		border-color: color-mix(in srgb, var(--success) 50%, transparent);
	}

	.variant-outline.tone-success:hover {
		background-color: color-mix(in srgb, var(--success) 10%, transparent);
		color: var(--success);
	}

	.variant-outline.tone-caution {
		color: var(--caution);
		border-color: color-mix(in srgb, var(--caution) 50%, transparent);
	}

	.variant-outline.tone-caution:hover {
		background-color: color-mix(in srgb, var(--caution) 10%, transparent);
		color: var(--caution);
	}

	.variant-outline.tone-info {
		color: var(--info);
		border-color: color-mix(in srgb, var(--info) 50%, transparent);
	}

	.variant-outline.tone-info:hover {
		background-color: color-mix(in srgb, var(--info) 10%, transparent);
		color: var(--info);
	}

	/* ---- Variant: ghost ---- */
	.variant-ghost {
		background-color: transparent;
		color: var(--foreground);
	}

	.variant-ghost:hover {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.variant-ghost.tone-critical {
		color: var(--destructive);
	}

	.variant-ghost.tone-critical:hover {
		background-color: color-mix(in srgb, var(--destructive) 10%, transparent);
		color: var(--destructive);
	}

	/* ---- Variant: link ---- */
	.variant-link {
		background-color: transparent;
		color: var(--primary);
		text-decoration-line: underline;
		text-underline-offset: 4px;
	}

	.variant-link:hover {
		text-decoration-line: underline;
		opacity: 0.8;
	}

	.variant-link.tone-critical {
		color: var(--destructive);
	}

	/* ---- Sizes ---- */
	.size-md {
		height: 2.25rem;
		padding: 0.5rem 1rem;
	}

	.size-sm {
		height: 2rem;
		padding: 0.375rem 0.75rem;
		font-size: var(--text-sm);
		border-radius: var(--radius, 0.375rem);
	}

	.size-lg {
		height: 2.75rem;
		padding: 0.5rem 1.5rem;
		font-size: var(--text-base);
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
