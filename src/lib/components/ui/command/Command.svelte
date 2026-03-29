<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		children,
		class: className = ''
	}: Props = $props();
</script>

<div {id} class="command {className}" role="dialog" aria-label="Command palette">
	{#if children}{@render children()}{/if}
</div>

<style>
	.command {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.5rem);
		background-color: var(--background);
		color: var(--foreground);
	}
</style>
