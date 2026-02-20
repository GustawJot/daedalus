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
	class="dropdown-trigger {className}"
	type="button"
	aria-haspopup="menu"
	onclick={onclick}
>
	{#if children}{@render children()}{/if}
</button>

<style>
	.dropdown-trigger {
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

	.dropdown-trigger:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
		border-radius: var(--radius, 0.25rem);
	}
</style>
