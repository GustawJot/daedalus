<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		value?: string;
		name?: string;
		disabled?: boolean;
		orientation?: 'horizontal' | 'vertical';
		onchange?: (value: string) => void;
		children?: Snippet<[{ value: string; set: (v: string) => void }]>;
		class?: string;
		[key: string]: unknown;
	};

	let {
		value = $bindable(''),
		name,
		disabled = false,
		orientation = 'vertical',
		onchange,
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	function set(newValue: string) {
		value = newValue;
		onchange?.(newValue);
	}
</script>

<div
	role="radiogroup"
	aria-orientation={orientation}
	class="radio-group {orientation} {className}"
	class:disabled
	{...restProps}
>
	{#if children}
		{@render children({ value, set })}
	{/if}
</div>

<style>
	.radio-group {
		display: flex;
		gap: var(--space-2);
	}

	.radio-group.vertical {
		flex-direction: column;
	}

	.radio-group.horizontal {
		flex-direction: row;
		align-items: center;
	}

	.radio-group.disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
