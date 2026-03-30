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
		border-radius: var(--radius-full);
		padding: 0.125rem 0.625rem;
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		line-height: var(--leading-sm);
		transition-property: background-color, color, border-color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		border: 1px solid transparent;
		white-space: nowrap;
	}

	/* ---- Variant: filled ---- */
	.variant-filled.tone-neutral {
		background-color: var(--primary);
		color: var(--primary-foreground);
	}

	.variant-filled.tone-neutral:hover {
		background-color: color-mix(in srgb, var(--primary) 90%, transparent);
	}

	.variant-filled.tone-critical {
		background-color: var(--destructive);
		color: var(--destructive-foreground);
	}

	.variant-filled.tone-critical:hover {
		background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
	}

	.variant-filled.tone-success {
		background-color: var(--success);
		color: var(--success-foreground);
	}

	.variant-filled.tone-success:hover {
		background-color: color-mix(in srgb, var(--success) 90%, transparent);
	}

	.variant-filled.tone-caution {
		background-color: var(--caution);
		color: var(--caution-foreground);
	}

	.variant-filled.tone-caution:hover {
		background-color: color-mix(in srgb, var(--caution) 90%, transparent);
	}

	.variant-filled.tone-info {
		background-color: var(--info);
		color: var(--info-foreground);
	}

	.variant-filled.tone-info:hover {
		background-color: color-mix(in srgb, var(--info) 90%, transparent);
	}

	/* ---- Variant: tonal ---- */
	.variant-tonal.tone-neutral {
		background-color: var(--secondary);
		color: var(--secondary-foreground);
	}

	.variant-tonal.tone-neutral:hover {
		background-color: color-mix(in srgb, var(--secondary) 80%, transparent);
	}

	.variant-tonal.tone-critical {
		background-color: color-mix(in srgb, var(--destructive) 10%, transparent);
		color: var(--destructive);
	}

	.variant-tonal.tone-success {
		background-color: color-mix(in srgb, var(--success) 10%, transparent);
		color: var(--success);
	}

	.variant-tonal.tone-caution {
		background-color: color-mix(in srgb, var(--caution) 10%, transparent);
		color: var(--caution);
	}

	.variant-tonal.tone-info {
		background-color: color-mix(in srgb, var(--info) 10%, transparent);
		color: var(--info);
	}

	/* ---- Variant: outline ---- */
	.variant-outline.tone-neutral {
		background-color: transparent;
		color: var(--foreground);
		border-color: var(--border);
	}

	.variant-outline.tone-critical {
		background-color: transparent;
		color: var(--destructive);
		border-color: color-mix(in srgb, var(--destructive) 50%, transparent);
	}

	.variant-outline.tone-success {
		background-color: transparent;
		color: var(--success);
		border-color: color-mix(in srgb, var(--success) 50%, transparent);
	}

	.variant-outline.tone-caution {
		background-color: transparent;
		color: var(--caution);
		border-color: color-mix(in srgb, var(--caution) 50%, transparent);
	}

	.variant-outline.tone-info {
		background-color: transparent;
		color: var(--info);
		border-color: color-mix(in srgb, var(--info) 50%, transparent);
	}
</style>
