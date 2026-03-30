<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		heading?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		heading,
		children,
		class: className = ''
	}: Props = $props();
</script>

<div {id} class="command-group {className}" role="group" aria-label={heading}>
	{#if heading}
		<div class="command-group-heading">{heading}</div>
	{/if}
	<div class="command-group-items">
		{#if children}{@render children()}{/if}
	</div>
</div>

<style>
	.command-group {
		overflow: hidden;
	}

	.command-group-heading {
		padding: 0.5rem 0.5rem 0.375rem;
		font-size: var(--text-xs);
		font-weight: var(--font-medium);
		color: var(--muted-foreground);
		letter-spacing: 0.02em;
	}

	.command-group-items {
		display: flex;
		flex-direction: column;
	}
</style>
