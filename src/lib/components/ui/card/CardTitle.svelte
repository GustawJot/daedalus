<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
		children?: Snippet;
		class?: string;
	}

	let {
		id,
		as = 'h3',
		children,
		class: className = ''
	}: Props = $props();
</script>

{#if as === 'h1'}
	<h1 {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h1>
{:else if as === 'h2'}
	<h2 {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h2>
{:else if as === 'h3'}
	<h3 {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h3>
{:else if as === 'h4'}
	<h4 {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h4>
{:else if as === 'h5'}
	<h5 {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h5>
{:else if as === 'h6'}
	<h6 {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</h6>
{:else if as === 'p'}
	<p {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</p>
{:else if as === 'span'}
	<span {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</span>
{:else}
	<div {id} class="card-title {className}">
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.card-title {
		font-size: var(--text-2xl);
		font-weight: var(--font-semibold);
		line-height: var(--leading-none);
		letter-spacing: -0.025em;
		color: var(--foreground);
	}
</style>
