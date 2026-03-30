<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		open?: boolean;
		children?: Snippet;
		class?: string;
		onmouseenter?: () => void;
		onmouseleave?: () => void;
	};

	let {
		id,
		open = false,
		children,
		class: className = '',
		onmouseenter,
		onmouseleave
	}: Props = $props();
</script>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		{id}
		class="hovercard-content {className}"
		onmouseenter={onmouseenter}
		onmouseleave={onmouseleave}
	>
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.hovercard-content {
		position: absolute;
		z-index: var(--z-popover, 50);
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
		width: 16rem;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.5rem);
		background-color: var(--background);
		color: var(--foreground);
		padding: 1rem;
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
		animation: hovercard-in var(--transition-fast, 150ms) ease-out;
	}

	@keyframes hovercard-in {
		from {
			opacity: 0;
			transform: translateX(-50%) scale(0.95) translateY(-2px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) scale(1) translateY(0);
		}
	}
</style>
