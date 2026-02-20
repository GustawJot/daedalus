<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		onclick,
		children,
		class: className = ''
	}: Props = $props();
</script>

<button
	class="popover-trigger {className}"
	type="button"
	aria-haspopup="dialog"
	onclick={onclick}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.popover-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		padding: 0;
		cursor: pointer;
		font: inherit;
		color: inherit;
		outline: none;
	}

	.popover-trigger:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
		border-radius: var(--radius, 0.25rem);
	}
</style>
