<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		orientation?: 'horizontal' | 'vertical';
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		orientation = 'horizontal',
		children,
		class: className = ''
	}: Props = $props();
</script>

<div {id} class="button-group {orientation} {className}" role="group">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.button-group {
		display: inline-flex;
	}

	.button-group.horizontal {
		flex-direction: row;
	}

	.button-group.vertical {
		flex-direction: column;
	}

	/* Horizontal: first child */
	.button-group.horizontal > :global(:first-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	/* Horizontal: last child */
	.button-group.horizontal > :global(:last-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	/* Horizontal: middle children */
	.button-group.horizontal > :global(:not(:first-child):not(:last-child)) {
		border-radius: 0;
	}

	/* Horizontal: prevent double borders */
	.button-group.horizontal > :global(:not(:first-child)) {
		margin-left: -1px;
	}

	/* Vertical: first child */
	.button-group.vertical > :global(:first-child) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	/* Vertical: last child */
	.button-group.vertical > :global(:last-child) {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	/* Vertical: middle children */
	.button-group.vertical > :global(:not(:first-child):not(:last-child)) {
		border-radius: 0;
	}

	/* Vertical: prevent double borders */
	.button-group.vertical > :global(:not(:first-child)) {
		margin-top: -1px;
	}

	/* Ensure focused element is on top */
	.button-group > :global(:focus-within),
	.button-group > :global(:hover) {
		z-index: 1;
		position: relative;
	}
</style>
