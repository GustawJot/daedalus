<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		error?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		error,
		children,
		class: className = ''
	}: Props = $props();
</script>

<div class="field {className}" class:has-error={!!error}>
	{#if children}
		{@render children()}
	{/if}
	{#if error}
		<p class="field-error">{error}</p>
	{/if}
</div>

<style>
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.field-error {
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: hsl(var(--destructive));
	}
</style>
