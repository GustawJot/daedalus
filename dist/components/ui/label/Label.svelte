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
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		line-height: var(--leading-none);
		color: var(--foreground);
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
