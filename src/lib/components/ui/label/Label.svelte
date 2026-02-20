<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	type Props = HTMLLabelAttributes & {
		for?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		for: htmlFor,
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<label
	for={htmlFor}
	class="label {className}"
	{...restProps}
>
	{#if children}{@render children()}{/if}
</label>

<style>
	.label {
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1;
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--foreground));
		cursor: default;
		user-select: none;
		-webkit-user-select: none;
	}

	:global(.disabled) > .label,
	.label[data-disabled] {
		cursor: not-allowed;
		opacity: 0.7;
	}
</style>
