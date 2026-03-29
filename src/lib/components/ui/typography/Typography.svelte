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
		color: var(--foreground);
	}

	.h1 {
		font-size: var(--text-4xl);
		font-weight: var(--font-extrabold);
		line-height: var(--leading-4xl);
		letter-spacing: -0.025em;
		scroll-margin-top: 5rem;
	}

	.h2 {
		font-size: var(--text-3xl);
		font-weight: var(--font-semibold);
		line-height: var(--leading-3xl);
		letter-spacing: -0.025em;
		scroll-margin-top: 5rem;
	}

	.h3 {
		font-size: var(--text-2xl);
		font-weight: var(--font-semibold);
		line-height: var(--leading-2xl);
		letter-spacing: -0.01em;
		scroll-margin-top: 5rem;
	}

	.h4 {
		font-size: var(--text-xl);
		font-weight: var(--font-semibold);
		line-height: var(--leading-body);
		letter-spacing: -0.01em;
		scroll-margin-top: 5rem;
	}

	.p {
		font-size: var(--text-base);
		line-height: var(--leading-body);
	}

	.blockquote {
		margin-top: 1.5rem;
		border-left: 2px solid var(--border);
		padding-left: 1.5rem;
		font-style: italic;
		color: var(--muted-foreground);
	}

	.code {
		position: relative;
		border-radius: var(--radius, 0.375rem);
		background-color: var(--muted);
		padding: 0.2rem 0.4rem;
		font-size: var(--text-sm);
		font-weight: var(--font-semibold);
		font-family: var(--font-mono, ui-monospace, monospace);
	}

	.lead {
		font-size: var(--text-xl);
		line-height: var(--leading-body);
		color: var(--muted-foreground);
	}

	.large {
		font-size: var(--text-lg);
		font-weight: var(--font-semibold);
		line-height: var(--leading-body);
	}

	.small {
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		line-height: var(--leading-sm);
	}

	.muted {
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
	}
</style>
