<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = Omit<HTMLInputAttributes, 'value'> & {
		value?: string;
		type?: string;
		placeholder?: string;
		disabled?: boolean;
		id?: string;
		name?: string;
		required?: boolean;
		class?: string;
	};

	let {
		value = $bindable(''),
		type = 'text',
		placeholder = '',
		disabled = false,
		id,
		name,
		required = false,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<input
	{type}
	bind:value
	{placeholder}
	{disabled}
	{id}
	{name}
	{required}
	class="input {className}"
	aria-required={required || undefined}
	aria-disabled={disabled || undefined}
	{...restProps}
/>

<style>
	.input {
		display: flex;
		width: 100%;
		height: 2.25rem;
		border-radius: var(--radius, 0.375rem);
		border: 1px solid hsl(var(--input));
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		transition-property: border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
		box-sizing: border-box;
	}

	.input::placeholder {
		color: hsl(var(--muted-foreground));
	}

	.input:focus-visible {
		border-color: hsl(var(--ring));
		box-shadow: 0 0 0 1px hsl(var(--ring));
	}

	.input:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.input::-webkit-outer-spin-button,
	.input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	.input[type='file'] {
		border: none;
		padding: 0;
		font-size: 0.875rem;
	}
</style>
