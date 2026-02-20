<script lang="ts">
	type Props = {
		value?: string;
		placeholder?: string;
		class?: string;
	};

	let {
		value = $bindable(''),
		placeholder = 'Type a command or search...',
		class: className = ''
	}: Props = $props();
</script>

<div class="command-input-wrapper {className}">
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
		gap: 0.5rem;
		padding: 0.75rem;
		border-bottom: 1px solid hsl(var(--border));
	}

	.search-icon {
		flex-shrink: 0;
		color: hsl(var(--muted-foreground));
	}

	.command-input {
		flex: 1;
		border: none;
		background: transparent;
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
		font-size: 0.875rem;
		line-height: 1.5;
		outline: none;
	}

	.command-input::placeholder {
		color: hsl(var(--muted-foreground));
	}
</style>
