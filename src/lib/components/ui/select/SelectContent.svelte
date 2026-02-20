<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		children?: Snippet;
		class?: string;
	};

	let {
		open = false,
		children,
		class: className = ''
	}: Props = $props();
</script>

{#if open}
	<div class="select-content {className}" role="listbox">
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}

<style>
	.select-content {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 50;
		margin-top: 0.25rem;
		max-height: 15rem;
		overflow-y: auto;
		border-radius: var(--radius, 0.375rem);
		border: 1px solid hsl(var(--border));
		background-color: hsl(var(--background));
		padding: 0.25rem;
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1));
		animation: select-content-in var(--transition-fast, 150ms) cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes select-content-in {
		from {
			opacity: 0;
			transform: translateY(-0.25rem) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
