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

<div {id} class="command-empty {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.command-empty {
		padding: 1.5rem;
		text-align: center;
		font-size: var(--text-sm);
		color: var(--muted-foreground);
	}
</style>
