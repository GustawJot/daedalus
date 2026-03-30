<script lang="ts">
	type Props = {
		id?: string;
		onclick?: () => void;
		class?: string;
	};

	let {
		id,
		onclick,
		class: className = ''
	}: Props = $props();
</script>

<button
	{id}
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
		color: var(--foreground);
		cursor: pointer;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: ease;
		flex-shrink: 0;
	}

	.sidebar-trigger:hover {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

</style>
