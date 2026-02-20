<script lang="ts">
	type Props = {
		page: number;
		active?: boolean;
		onclick?: () => void;
		class?: string;
	};

	let {
		page,
		active = false,
		onclick,
		class: className = ''
	}: Props = $props();
</script>

<li>
	<button
		type="button"
		class="pagination-item {className}"
		class:active
		aria-current={active ? 'page' : undefined}
		aria-label="Page {page}"
		{onclick}
	>
		{page}
	</button>
</li>

<style>
	li {
		list-style: none;
	}

	.pagination-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.25rem;
		height: 2.25rem;
		padding: 0 0.5rem;
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius, 0.375rem);
		background-color: transparent;
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition-property: background-color, color, border-color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
	}

	.pagination-item:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.pagination-item:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	.pagination-item.active {
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		border-color: hsl(var(--primary));
	}
</style>
