<script lang="ts">
	type Props = {
		id?: string;
		page: number;
		active?: boolean;
		onclick?: () => void;
		class?: string;
	};

	let {
		id,
		page,
		active = false,
		onclick,
		class: className = ''
	}: Props = $props();
</script>

<li {id}>
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
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
		background-color: transparent;
		color: var(--foreground);
		font-size: var(--text-sm);
		font-weight: var(--font-medium);
		cursor: pointer;
		transition-property: background-color, color, border-color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
	}

	.pagination-item:hover {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.pagination-item.active {
		background-color: var(--primary);
		color: var(--primary-foreground);
		border-color: var(--primary);
	}
</style>
