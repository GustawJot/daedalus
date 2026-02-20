<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	type Props = Omit<HTMLTextareaAttributes, 'value'> & {
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		rows?: number;
		id?: string;
		name?: string;
		required?: boolean;
		class?: string;
	};

	let {
		value = $bindable(''),
		placeholder = '',
		disabled = false,
		rows = 3,
		id,
		name,
		required = false,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<textarea
	bind:value
	{placeholder}
	{disabled}
	{rows}
	{id}
	{name}
	{required}
	class="textarea {className}"
	aria-required={required || undefined}
	aria-disabled={disabled || undefined}
	{...restProps}
></textarea>

<style>
	.textarea {
		display: flex;
		width: 100%;
		min-height: 5rem;
		border-radius: var(--radius, 0.375rem);
		border: 1px solid hsl(var(--input));
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.5;
		font-family: var(--font-sans, system-ui, sans-serif);
		transition-property: border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
		resize: vertical;
		box-sizing: border-box;
	}

	.textarea::placeholder {
		color: hsl(var(--muted-foreground));
	}

	.textarea:focus-visible {
		border-color: hsl(var(--ring));
		box-shadow: 0 0 0 1px hsl(var(--ring));
	}

	.textarea:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		resize: none;
	}
</style>
