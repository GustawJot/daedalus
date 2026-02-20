<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		title?: string;
		description?: string;
		children?: Snippet;
		class?: string;
	};

	let {
		title,
		description,
		children,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div class="empty {className}" role="status" {...restProps}>
	{#if title}
		<h3 class="empty-title">{title}</h3>
	{/if}
	{#if description}
		<p class="empty-description">{description}</p>
	{/if}
	{#if children}
		<div class="empty-content">
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.empty {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2.5rem 1rem;
		gap: 0.5rem;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.empty-title {
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.75rem;
		color: hsl(var(--foreground));
		margin: 0;
	}

	.empty-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: hsl(var(--muted-foreground));
		max-width: 28rem;
		margin: 0;
	}

	.empty-content {
		margin-top: 1rem;
	}
</style>
