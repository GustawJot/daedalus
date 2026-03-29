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
		gap: var(--space-2);
	}

	.empty-title {
		font-size: var(--text-lg);
		font-weight: var(--font-semibold);
		line-height: var(--leading-body);
		color: var(--foreground);
	}

	.empty-description {
		font-size: var(--text-sm);
		line-height: var(--leading-sm);
		color: var(--muted-foreground);
		max-width: 28rem;
	}

	.empty-content {
		margin-top: 1rem;
	}
</style>
