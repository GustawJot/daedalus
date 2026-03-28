<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		value?: string;
		open?: boolean;
		disabled?: boolean;
		name?: string;
		placeholder?: string;
		children?: Snippet<[{
			value: string;
			open: boolean;
			disabled: boolean;
			placeholder: string;
			select: (v: string, label?: string) => void;
			toggle: () => void;
			close: () => void;
		}]>;
		class?: string;
		[key: string]: unknown;
	};

	let {
		value = $bindable(''),
		open = $bindable(false),
		disabled = false,
		name,
		placeholder = 'Select...',
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	let displayText = $state('');

	function select(v: string, label?: string) {
		value = v;
		displayText = label ?? v;
		open = false;
	}

	function toggle() {
		if (!disabled) {
			open = !open;
		}
	}

	function close() {
		open = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			open = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if name}
	<input type="hidden" {name} {value} />
{/if}

<div
	class="select-root {className}"
	class:disabled
	{...restProps}
>
	{#if children}
		{@render children({
			value,
			open,
			disabled,
			placeholder,
			select,
			toggle,
			close
		})}
	{/if}
</div>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="select-backdrop" onclick={close} onkeydown={() => {}}></div>
{/if}

<style>
	.select-root {
		position: relative;
		display: inline-flex;
		flex-direction: column;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.select-root.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.select-backdrop {
		position: fixed;
		inset: 0;
		z-index: 49;
	}
</style>
