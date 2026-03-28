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
		border: 1px solid hsl(var(--border));
		padding: 1rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.tone-neutral {
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		border-color: hsl(var(--border));
	}

	.tone-critical {
		background-color: hsl(var(--destructive) / 0.1);
		color: hsl(var(--destructive));
		border-color: hsl(var(--destructive) / 0.5);
	}

	.tone-critical :global(.alert-title) {
		color: hsl(var(--destructive));
	}

	.tone-critical :global(.alert-description) {
		color: hsl(var(--destructive) / 0.9);
	}

	.tone-success {
		background-color: hsl(var(--success) / 0.1);
		color: hsl(var(--success));
		border-color: hsl(var(--success) / 0.5);
	}

	.tone-success :global(.alert-title) {
		color: hsl(var(--success));
	}

	.tone-success :global(.alert-description) {
		color: hsl(var(--success) / 0.9);
	}

	.tone-caution {
		background-color: hsl(var(--caution) / 0.1);
		color: hsl(var(--caution));
		border-color: hsl(var(--caution) / 0.5);
	}

	.tone-caution :global(.alert-title) {
		color: hsl(var(--caution));
	}

	.tone-caution :global(.alert-description) {
		color: hsl(var(--caution) / 0.9);
	}

	.tone-info {
		background-color: hsl(var(--info) / 0.1);
		color: hsl(var(--info));
		border-color: hsl(var(--info) / 0.5);
	}

	.tone-info :global(.alert-title) {
		color: hsl(var(--info));
	}

	.tone-info :global(.alert-description) {
		color: hsl(var(--info) / 0.9);
	}
</style>
