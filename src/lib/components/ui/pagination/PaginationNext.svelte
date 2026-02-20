<script lang="ts">
	type Props = {
		disabled?: boolean;
		onclick?: () => void;
		class?: string;
	};

	let {
		disabled = false,
		onclick,
		class: className = ''
	}: Props = $props();
</script>

<li>
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
		gap: 0.25rem;
		height: 2.25rem;
		padding: 0 0.75rem;
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

	.pagination-next:hover:not(:disabled) {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.pagination-next:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
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
