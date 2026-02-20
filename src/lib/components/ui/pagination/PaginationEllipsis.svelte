<script lang="ts">
	type Props = {
		class?: string;
	};

	let {
		class: className = ''
	}: Props = $props();
</script>

<li>
	<span class="pagination-ellipsis {className}" aria-hidden="true">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<circle cx="12" cy="12" r="1.5" />
			<circle cx="6" cy="12" r="1.5" />
			<circle cx="18" cy="12" r="1.5" />
		</svg>
		<span class="sr-only">More pages</span>
	</span>
</li>

<style>
	li {
		list-style: none;
	}

	.pagination-ellipsis {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.25rem;
		height: 2.25rem;
		color: hsl(var(--muted-foreground));
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
