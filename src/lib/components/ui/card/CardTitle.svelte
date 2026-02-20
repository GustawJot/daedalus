<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
		children?: Snippet;
		class?: string;
	}

	let {
		as = 'h3',
		children,
		class: className = ''
	}: Props = $props();
</script>

{#if as === 'h1'}
	<h1 class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h1>
{:else if as === 'h2'}
	<h2 class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h2>
{:else if as === 'h3'}
	<h3 class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h3>
{:else if as === 'h4'}
	<h4 class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h4>
{:else if as === 'h5'}
	<h5 class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h5>
{:else if as === 'h6'}
	<h6 class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h6>
{:else if as === 'p'}
	<p class="card-title {className}">
		{#if children}{@render children()}{/if}
	</p>
{:else if as === 'span'}
	<span class="card-title {className}">
		{#if children}{@render children()}{/if}
	</span>
{:else}
	<div class="card-title {className}">
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.card-title {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.025em;
		margin: 0;
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
	}
</style>
