<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = Omit<HTMLInputAttributes, 'value'> & {
		value?: string | number;
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
/>/

<style>
	.input {
		display: flex;
		width: 100%;
		height: 2.25rem;
		border-radius: var(--radius, 0.375rem);
		border: 1px solid var(--input);
		background-color: var(--background);
		color: var(--foreground);
		padding: 0.5rem 0.75rem;
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		transition-property: border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
	}

	.input::placeholder {
		color: var(--muted-foreground);
	}

	.input:focus-visible {
		border-color: var(--ring);
		box-shadow: 0 0 0 1px var(--ring);
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
		font-size: var(--text-sm);
	}
</style>
