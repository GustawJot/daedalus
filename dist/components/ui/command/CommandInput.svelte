<script lang="ts">
	type Props = {
		id?: string;
		value?: string;
		placeholder?: string;
		class?: string;
	};

	let {
		id,
		value = $bindable(''),
		placeholder = 'Type a command or search...',
		class: className = ''
	}: Props = $props();
</script>

<div {id} class="command-input-wrapper {className}">
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
		class="search-icon"
	>
		<circle cx="11" cy="11" r="8" />
		<path d="m21 21-4.3-4.3" />
	</svg>
	<input
		bind:value
		type="text"
		class="command-input"
		{placeholder}
		role="combobox"
		aria-expanded="true"
		aria-controls="command-listbox"
		aria-autocomplete="list"
		autocomplete="off"
	/>
</div>

<style>
	.command-input-wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: 0.75rem;
		border-bottom: 1px solid var(--border);
	}

	.search-icon {
		flex-shrink: 0;
		color: var(--muted-foreground);
	}

	.command-input {
		flex: 1;
		border: none;
		background: transparent;
		color: var(--foreground);
		font-size: var(--text-sm);
		line-height: var(--leading-normal);
		outline: none;
	}

	.command-input::placeholder {
		color: var(--muted-foreground);
	}
</style>
