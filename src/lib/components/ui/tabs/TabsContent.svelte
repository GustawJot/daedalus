<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		value?: string;
		activeValue?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		value = '',
		activeValue = '',
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	let isActive = $derived(value === activeValue);
</script>

{#if isActive}
	<div
		class="tabs-content {className}"
		role="tabpanel"
		tabindex={0}
		data-state={isActive ? 'active' : 'inactive'}
		data-value={value}
		{...restProps}
	>
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.tabs-content {
		margin-top: 0.5rem;
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--foreground));
	}

	.tabs-content:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
		border-radius: var(--radius, 0.375rem);
	}
</style>
