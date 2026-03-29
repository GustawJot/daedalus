<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Tone } from '../types.js';

	type Props = {
		tone?: Tone;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		tone = 'neutral',
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div
	role="alert"
	class="alert tone-{tone} {className}"
	{...restProps}
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.alert {
		position: relative;
		width: 100%;
		border-radius: var(--radius, 0.375rem);
		border: 1px solid var(--border);
		padding: 1rem;
		font-size: var(--text-sm);
	}

	.tone-neutral {
		background-color: var(--background);
		color: var(--foreground);
		border-color: var(--border);
	}

	.tone-critical {
		background-color: color-mix(in srgb, var(--destructive) 10%, transparent);
		color: var(--destructive);
		border-color: color-mix(in srgb, var(--destructive) 50%, transparent);
	}

	.tone-critical :global(.alert-title) {
		color: var(--destructive);
	}

	.tone-critical :global(.alert-description) {
		color: color-mix(in srgb, var(--destructive) 90%, transparent);
	}

	.tone-success {
		background-color: color-mix(in srgb, var(--success) 10%, transparent);
		color: var(--success);
		border-color: color-mix(in srgb, var(--success) 50%, transparent);
	}

	.tone-success :global(.alert-title) {
		color: var(--success);
	}

	.tone-success :global(.alert-description) {
		color: color-mix(in srgb, var(--success) 90%, transparent);
	}

	.tone-caution {
		background-color: color-mix(in srgb, var(--caution) 10%, transparent);
		color: var(--caution);
		border-color: color-mix(in srgb, var(--caution) 50%, transparent);
	}

	.tone-caution :global(.alert-title) {
		color: var(--caution);
	}

	.tone-caution :global(.alert-description) {
		color: color-mix(in srgb, var(--caution) 90%, transparent);
	}

	.tone-info {
		background-color: color-mix(in srgb, var(--info) 10%, transparent);
		color: var(--info);
		border-color: color-mix(in srgb, var(--info) 50%, transparent);
	}

	.tone-info :global(.alert-title) {
		color: var(--info);
	}

	.tone-info :global(.alert-description) {
		color: color-mix(in srgb, var(--info) 90%, transparent);
	}
</style>
