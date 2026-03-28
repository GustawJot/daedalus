<script lang="ts">
	import type { Snippet } from 'svelte';
	import Label from '../label/Label.svelte';

	type Props = {
		label?: string;
		labelFor?: string;
		error?: string;
		description?: string;
		required?: boolean;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	};

	let {
		label,
		labelFor,
		error,
		description,
		required = false,
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div class="field {className}" class:has-error={!!error} {...restProps}>
	{#if label}
		<Label for={labelFor} class="field-label">
			{label}{#if required}<span class="required-mark" aria-hidden="true"> *</span>{/if}
		</Label>
	{/if}
	{#if description}
		<p class="field-description">{description}</p>
	{/if}
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

	.field-description {
		margin: 0;
		font-size: var(--text-sm, 0.875rem);
		line-height: 1.25rem;
		color: hsl(var(--muted-foreground));
	}

	.field-error {
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: hsl(var(--destructive));
	}

	.required-mark {
		color: hsl(var(--destructive));
	}
</style>
