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
		gap: var(--space-1-5);
	}

	.field-description {
		font-size: var(--text-sm, 0.875rem);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
	}

	.field-error {
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		font-weight: var(--font-medium);
		color: var(--destructive);
	}

	.required-mark {
		color: var(--destructive);
	}
</style>
