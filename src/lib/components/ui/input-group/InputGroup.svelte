<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let {
		children,
		class: className = ''
	}: Props = $props();
</script>

<div class="input-group {className}">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.input-group {
		display: flex;
		align-items: stretch;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	/* First child gets left radius only */
	.input-group > :global(:first-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	/* Last child gets right radius only */
	.input-group > :global(:last-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	/* Middle children get no radius */
	.input-group > :global(:not(:first-child):not(:last-child)) {
		border-radius: 0;
	}

	/* Prevent double borders */
	.input-group > :global(:not(:first-child)) {
		margin-left: -1px;
	}

	/* Ensure focused element is on top */
	.input-group > :global(:focus-within) {
		z-index: 1;
	}
</style>
