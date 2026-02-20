<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type TypographyVariant =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'p'
		| 'blockquote'
		| 'code'
		| 'lead'
		| 'large'
		| 'small'
		| 'muted';

	type Props = HTMLAttributes<HTMLElement> & {
		variant?: TypographyVariant;
		as?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		variant = 'p',
		as,
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	const defaultTagMap: Record<TypographyVariant, string> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		p: 'p',
		blockquote: 'blockquote',
		code: 'code',
		lead: 'p',
		large: 'div',
		small: 'small',
		muted: 'p'
	};

	const tag = $derived(as || defaultTagMap[variant]);
</script>

<svelte:element this={tag} class="typography {variant} {className}" {...restProps}>
	{#if children}{@render children()}{/if}
</svelte:element>

<style>
	.typography {
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--foreground));
	}

	.h1 {
		font-size: 2.25rem;
		font-weight: 800;
		line-height: 2.5rem;
		letter-spacing: -0.025em;
		scroll-margin-top: 5rem;
	}

	.h2 {
		font-size: 1.875rem;
		font-weight: 600;
		line-height: 2.25rem;
		letter-spacing: -0.025em;
		scroll-margin-top: 5rem;
	}

	.h3 {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 2rem;
		letter-spacing: -0.01em;
		scroll-margin-top: 5rem;
	}

	.h4 {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.75rem;
		letter-spacing: -0.01em;
		scroll-margin-top: 5rem;
	}

	.p {
		font-size: 1rem;
		line-height: 1.75;
	}

	.blockquote {
		margin-top: 1.5rem;
		border-left: 2px solid hsl(var(--border));
		padding-left: 1.5rem;
		font-style: italic;
		color: hsl(var(--muted-foreground));
	}

	.code {
		position: relative;
		border-radius: var(--radius, 0.375rem);
		background-color: hsl(var(--muted));
		padding: 0.2rem 0.4rem;
		font-size: 0.875rem;
		font-weight: 600;
		font-family: var(--font-mono, ui-monospace, monospace);
	}

	.lead {
		font-size: 1.25rem;
		line-height: 1.75rem;
		color: hsl(var(--muted-foreground));
	}

	.large {
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.75rem;
	}

	.small {
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25rem;
	}

	.muted {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: hsl(var(--muted-foreground));
	}
</style>
