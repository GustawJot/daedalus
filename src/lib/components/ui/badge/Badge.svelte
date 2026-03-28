<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Tone } from '../types.js';

	type BadgeVariant = 'filled' | 'tonal' | 'outline';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		variant?: BadgeVariant;
		tone?: Tone;
		children?: Snippet;
		class?: string;
	};

	let {
		variant = 'filled',
		tone = 'neutral',
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<span class="badge variant-{variant} tone-{tone} {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		transition-property: background-color, color, border-color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid transparent;
		white-space: nowrap;
	}

	.badge:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	/* ---- Variant: filled ---- */
	.variant-filled.tone-neutral {
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
	}

	.variant-filled.tone-neutral:hover {
		background-color: hsl(var(--primary) / 0.9);
	}

	.variant-filled.tone-critical {
		background-color: hsl(var(--destructive));
		color: hsl(var(--destructive-foreground));
	}

	.variant-filled.tone-critical:hover {
		background-color: hsl(var(--destructive) / 0.9);
	}

	.variant-filled.tone-success {
		background-color: hsl(var(--success));
		color: hsl(var(--success-foreground));
	}

	.variant-filled.tone-success:hover {
		background-color: hsl(var(--success) / 0.9);
	}

	.variant-filled.tone-caution {
		background-color: hsl(var(--caution));
		color: hsl(var(--caution-foreground));
	}

	.variant-filled.tone-caution:hover {
		background-color: hsl(var(--caution) / 0.9);
	}

	.variant-filled.tone-info {
		background-color: hsl(var(--info));
		color: hsl(var(--info-foreground));
	}

	.variant-filled.tone-info:hover {
		background-color: hsl(var(--info) / 0.9);
	}

	/* ---- Variant: tonal ---- */
	.variant-tonal.tone-neutral {
		background-color: hsl(var(--secondary));
		color: hsl(var(--secondary-foreground));
	}

	.variant-tonal.tone-neutral:hover {
		background-color: hsl(var(--secondary) / 0.8);
	}

	.variant-tonal.tone-critical {
		background-color: hsl(var(--destructive) / 0.1);
		color: hsl(var(--destructive));
	}

	.variant-tonal.tone-success {
		background-color: hsl(var(--success) / 0.1);
		color: hsl(var(--success));
	}

	.variant-tonal.tone-caution {
		background-color: hsl(var(--caution) / 0.1);
		color: hsl(var(--caution));
	}

	.variant-tonal.tone-info {
		background-color: hsl(var(--info) / 0.1);
		color: hsl(var(--info));
	}

	/* ---- Variant: outline ---- */
	.variant-outline.tone-neutral {
		background-color: transparent;
		color: hsl(var(--foreground));
		border-color: hsl(var(--border));
	}

	.variant-outline.tone-critical {
		background-color: transparent;
		color: hsl(var(--destructive));
		border-color: hsl(var(--destructive) / 0.5);
	}

	.variant-outline.tone-success {
		background-color: transparent;
		color: hsl(var(--success));
		border-color: hsl(var(--success) / 0.5);
	}

	.variant-outline.tone-caution {
		background-color: transparent;
		color: hsl(var(--caution));
		border-color: hsl(var(--caution) / 0.5);
	}

	.variant-outline.tone-info {
		background-color: transparent;
		color: hsl(var(--info));
		border-color: hsl(var(--info) / 0.5);
	}
</style>
