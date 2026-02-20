<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		heading?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		heading,
		children,
		class: className = ''
	}: Props = $props();
</script>

<div class="command-group {className}" role="group" aria-label={heading}>
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
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.75rem;
		font-weight: 500;
		color: hsl(var(--muted-foreground));
		letter-spacing: 0.02em;
	}

	.command-group-items {
		display: flex;
		flex-direction: column;
	}
</style>
