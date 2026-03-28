<script lang="ts">
	type Props = {
		checked?: boolean;
		disabled?: boolean;
		id?: string;
		name?: string;
		onchange?: (checked: boolean) => void;
		class?: string;
		[key: string]: unknown;
	};

	let {
		checked = $bindable(false),
		disabled = false,
		id,
		name,
		onchange,
		class: className = '',
		...restProps
	}: Props = $props();

	function handleClick() {
		if (disabled) return;
		checked = !checked;
		onchange?.(checked);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			handleClick();
		}
	}
</script>

{#if name}
	<input type="hidden" {name} value={checked ? 'on' : ''} />
{/if}

<button
	type="button"
	role="switch"
	aria-checked={checked}
	aria-label="Toggle"
	{id}
	{disabled}
	class="switch {className}"
	{...restProps}
	class:checked
	onclick={handleClick}
	onkeydown={handleKeydown}
>
	<span class="switch-thumb" class:checked></span>
</button>

<style>
	.switch {
		display: inline-flex;
		align-items: center;
		width: 2.75rem;
		height: 1.5rem;
		flex-shrink: 0;
		cursor: pointer;
		border-radius: 9999px;
		border: 2px solid transparent;
		padding: 0;
		background-color: hsl(var(--input));
		transition-property: background-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
	}

	.switch:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.switch:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.switch.checked {
		background-color: hsl(var(--primary));
	}

	.switch-thumb {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background-color: hsl(var(--background));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		transition-property: transform;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transform: translateX(0);
		pointer-events: none;
	}

	.switch-thumb.checked {
		transform: translateX(1.25rem);
	}
</style>
