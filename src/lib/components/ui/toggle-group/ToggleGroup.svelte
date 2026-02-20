<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		type?: 'single' | 'multiple';
		value?: string | string[];
		variant?: 'default' | 'outline';
		size?: 'default' | 'sm' | 'lg';
		disabled?: boolean;
		children?: Snippet<[{ value: string | string[]; toggle: (itemValue: string) => void }]>;
		class?: string;
	};

	let {
		type = 'single',
		value = $bindable(type === 'multiple' ? [] : ''),
		variant = 'default',
		size = 'default',
		disabled = false,
		children,
		class: className = ''
	}: Props = $props();

	function toggle(itemValue: string) {
		if (disabled) return;

		if (type === 'single') {
			value = value === itemValue ? '' : itemValue;
		} else {
			const arr = Array.isArray(value) ? value : [];
			if (arr.includes(itemValue)) {
				value = arr.filter((v) => v !== itemValue);
			} else {
				value = [...arr, itemValue];
			}
		}
	}
</script>

<div
	class="toggle-group variant-{variant} size-{size} {className}"
	class:disabled
	role="group"
>
	{#if children}
		{@render children({ value, toggle })}
	{/if}
</div>

<style>
	.toggle-group {
		display: inline-flex;
		align-items: center;
		gap: 0;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.toggle-group.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	/* Connected borders for children */
	.toggle-group > :global(:first-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.toggle-group > :global(:last-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.toggle-group > :global(:not(:first-child):not(:last-child)) {
		border-radius: 0;
	}

	.toggle-group > :global(:not(:first-child)) {
		margin-left: -1px;
	}

	.toggle-group > :global(:focus-within) {
		z-index: 1;
		position: relative;
	}
</style>
