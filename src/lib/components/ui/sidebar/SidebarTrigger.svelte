<script lang="ts">
	type Props = {
		onclick?: () => void;
		class?: string;
	};

	let {
		onclick,
		class: className = ''
	}: Props = $props();
</script>

<button
	type="button"
	class="sidebar-trigger {className}"
	{onclick}
	aria-label="Toggle sidebar"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<line x1="3" x2="21" y1="6" y2="6" />
		<line x1="3" x2="21" y1="12" y2="12" />
		<line x1="3" x2="21" y1="18" y2="18" />
	</svg>
</button>

<style>
	.sidebar-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: none;
		border-radius: var(--radius, 0.375rem);
		background-color: transparent;
		color: hsl(var(--foreground));
		cursor: pointer;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
		flex-shrink: 0;
	}

	.sidebar-trigger:hover {
		background-color: hsl(var(--accent));
		color: hsl(var(--accent-foreground));
	}

	.sidebar-trigger:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}
</style>
