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

<li role="presentation" aria-hidden="true" class="breadcrumb-separator {className}">
	{#if children}
		{@render children()}
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	{/if}
</li>

<style>
	.breadcrumb-separator {
		display: inline-flex;
		align-items: center;
		color: hsl(var(--muted-foreground));
	}

	.breadcrumb-separator svg {
		width: 1rem;
		height: 1rem;
	}
</style>
