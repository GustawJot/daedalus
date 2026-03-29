<script lang="ts">
	type Props = {
		id?: string;
		disabled?: boolean;
		onclick?: () => void;
		class?: string;
	};

	let {
		id,
		disabled = false,
		onclick,
		class: className = ''
	}: Props = $props();
</script>

<li {id}>
	<button
		type="button"
		class="pagination-next {className}"
		{disabled}
		aria-label="Go to next page"
		{onclick}
	>
		<span>Next</span>
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
	</button>
</li>

<style>
	li {
		list-style: none;
	}

	.pagination-next {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-1);
		height: 2.25rem;
		padding: 0 0.75rem;
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

	.pagination-next:hover:not(:disabled) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.pagination-next:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	.pagination-next svg {
		width: 1rem;
		height: 1rem;
	}
</style>
