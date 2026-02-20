<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		value: string;
		disabled?: boolean;
		id?: string;
		checked?: boolean;
		name?: string;
		onchange?: (value: string) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		value,
		disabled = false,
		id,
		checked = false,
		name,
		onchange,
		children,
		class: className = ''
	}: Props = $props();

	function handleChange() {
		if (disabled) return;
		onchange?.(value);
	}
</script>

<label class="radio-item {className}" class:disabled>
	<input
		type="radio"
		class="radio-input"
		{name}
		{value}
		{id}
		{disabled}
		checked={checked}
		onchange={handleChange}
	/>
	<span class="radio-indicator" class:checked>
		{#if checked}
			<span class="radio-dot"></span>
		{/if}
	</span>
	{#if children}
		<span class="radio-label">
			{@render children()}
		</span>
	{/if}
</label>

<style>
	.radio-item {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.radio-item.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.radio-input {
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

	.radio-indicator {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		border-radius: 9999px;
		border: 1px solid hsl(var(--input));
		background-color: hsl(var(--background));
		transition-property: border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.radio-indicator.checked {
		border-color: hsl(var(--primary));
	}

	.radio-input:focus-visible + .radio-indicator {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.radio-dot {
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 9999px;
		background-color: hsl(var(--primary));
	}

	.radio-label {
		color: hsl(var(--foreground));
	}

	.radio-item.disabled .radio-label {
		color: hsl(var(--muted-foreground));
	}
</style>
