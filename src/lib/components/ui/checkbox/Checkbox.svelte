<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		checked?: boolean;
		disabled?: boolean;
		id?: string;
		name?: string;
		value?: string;
		required?: boolean;
		onchange?: (checked: boolean) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		checked = $bindable(false),
		disabled = false,
		id,
		name,
		value,
		required = false,
		onchange,
		children,
		class: className = ''
	}: Props = $props();

	function handleChange() {
		if (disabled) return;
		checked = !checked;
		onchange?.(checked);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === ' ') {
			e.preventDefault();
			handleChange();
		}
	}
</script>

<label class="checkbox-wrapper {className}" class:disabled>
	<input
		type="checkbox"
		class="checkbox-input"
		bind:checked
		{disabled}
		{id}
		{name}
		{value}
		{required}
		onchange={() => onchange?.(checked)}
	/>
	<span
		class="checkbox-indicator"
		class:checked
		role="presentation"
	>
		{#if checked}
			<svg
				class="checkbox-icon"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		{/if}
	</span>
	{#if children}
		<span class="checkbox-label">
			{@render children()}
		</span>
	{/if}
</label>

<style>
	.checkbox-wrapper {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.checkbox-wrapper.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.checkbox-input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.checkbox-indicator {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		border-radius: calc(var(--radius, 0.375rem) * 0.5);
		border: 1px solid hsl(var(--input));
		background-color: hsl(var(--background));
		transition-property: background-color, border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.checkbox-indicator.checked {
		background-color: hsl(var(--primary));
		border-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
	}

	.checkbox-input:focus-visible + .checkbox-indicator {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.checkbox-icon {
		width: 0.75rem;
		height: 0.75rem;
	}

	.checkbox-label {
		color: hsl(var(--foreground));
	}

	.checkbox-wrapper.disabled .checkbox-label {
		color: hsl(var(--muted-foreground));
	}
</style>
