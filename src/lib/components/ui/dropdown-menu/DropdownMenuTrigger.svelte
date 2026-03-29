<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		onclick?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		onclick,
		children,
		class: className = ''
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	{id}
	class="dropdown-trigger {className}"
	role="button"
	tabindex="0"
	aria-haspopup="menu"
	onclick={onclick}
	onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onclick?.(); } }}
>
	{#if children}{@render children()}{/if}
</div>

<style>
	.dropdown-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		cursor: pointer;
		font: inherit;
		color: inherit;
		outline: none;
	}

	.dropdown-trigger:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
		border-radius: var(--radius, 0.25rem);
	}
</style>
