<script lang="ts">
	export type ComboboxOption = {
		value: string;
		label: string;
	};

	type Props = {
		options: ComboboxOption[];
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		emptyMessage?: string;
		class?: string;
		[key: string]: unknown;
	};

	let {
		options,
		value = $bindable(''),
		placeholder = 'Search...',
		disabled = false,
		emptyMessage = 'No results found.',
		class: className = '',
		...restProps
	}: Props = $props();

	let open = $state(false);
	let search = $state('');
	let highlightedIndex = $state(-1);
	let inputEl: HTMLInputElement | undefined = $state();
	let listEl: HTMLUListElement | undefined = $state();

	let filteredOptions = $derived(
		search
			? options.filter((opt) =>
					opt.label.toLowerCase().includes(search.toLowerCase())
				)
			: options
	);

	let selectedLabel = $derived(options.find((opt) => opt.value === value)?.label ?? '');

	function openDropdown() {
		if (disabled) return;
		open = true;
		search = '';
		highlightedIndex = -1;
	}

	function closeDropdown() {
		open = false;
		search = '';
		highlightedIndex = -1;
	}

	function selectOption(opt: ComboboxOption) {
		value = opt.value;
		closeDropdown();
	}

	function handleInputKeydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				if (!open) {
					openDropdown();
				} else {
					highlightedIndex = Math.min(highlightedIndex + 1, filteredOptions.length - 1);
					scrollToHighlighted();
				}
				break;
			case 'ArrowUp':
				e.preventDefault();
				if (open) {
					highlightedIndex = Math.max(highlightedIndex - 1, 0);
					scrollToHighlighted();
				}
				break;
			case 'Enter':
				e.preventDefault();
				if (open && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
					selectOption(filteredOptions[highlightedIndex]);
				}
				break;
			case 'Escape':
				e.preventDefault();
				closeDropdown();
				break;
		}
	}

	function scrollToHighlighted() {
		requestAnimationFrame(() => {
			const el = listEl?.querySelector(`[data-index="${highlightedIndex}"]`);
			el?.scrollIntoView({ block: 'nearest' });
		});
	}

	function handleClickOutside(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (!target.closest('.combobox')) {
			closeDropdown();
		}
	}

	$effect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside, true);
			return () => document.removeEventListener('click', handleClickOutside, true);
		}
	});
</script>

<div class="combobox {className}" class:disabled {...restProps}>
	<button
		type="button"
		class="combobox-trigger"
		{disabled}
		onclick={() => {
			if (open) {
				closeDropdown();
			} else {
				openDropdown();
				requestAnimationFrame(() => inputEl?.focus());
			}
		}}
		aria-haspopup="listbox"
		aria-expanded={open}
	>
		<span class="trigger-text" class:placeholder={!value}>
			{value ? selectedLabel : placeholder}
		</span>
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
			class="chevron"
			class:open
		>
			<path d="m6 9 6 6 6-6" />
		</svg>
	</button>

	{#if open}
		<div class="combobox-dropdown">
			<div class="search-wrapper">
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
					bind:this={inputEl}
					bind:value={search}
					type="text"
					class="search-input"
					{placeholder}
					role="combobox"
					aria-expanded={open}
					aria-controls="combobox-listbox"
					aria-autocomplete="list"
					autocomplete="off"
					onkeydown={handleInputKeydown}
				/>
			</div>

			{#if filteredOptions.length === 0}
				<div class="empty-message">{emptyMessage}</div>
			{:else}
				<ul
					bind:this={listEl}
					id="combobox-listbox"
					role="listbox"
					class="options-list"
				>
					{#each filteredOptions as opt, i}
						<!-- svelte-ignore a11y_click_events_have_key_events -->
					<li
							role="option"
							class="option-item"
							class:highlighted={i === highlightedIndex}
							class:selected={opt.value === value}
							aria-selected={opt.value === value}
							data-index={i}
							onmouseenter={() => (highlightedIndex = i)}
							onclick={() => selectOption(opt)}
						>
							<span class="option-label">{opt.label}</span>
							{#if opt.value === value}
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
									class="check-icon"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</div>

<style>
	.combobox {
		position: relative;
		display: inline-block;
	}

	.combobox.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.combobox-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		width: 100%;
		min-width: 12rem;
		height: 2.25rem;
		padding: 0 0.75rem;
		border: 1px solid var(--input);
		border-radius: var(--radius, 0.375rem);
		background-color: var(--background);
		color: var(--foreground);
		font-size: var(--text-sm);
		cursor: pointer;
		transition: border-color var(--transition-fast, 150ms) ease;
		text-align: left;
	}

	.combobox-trigger:hover:not(:disabled) {
		border-color: var(--ring);
	}

	.trigger-text {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.trigger-text.placeholder {
		color: var(--muted-foreground);
	}

	.chevron {
		flex-shrink: 0;
		color: var(--muted-foreground);
		transition: transform var(--transition-fast, 150ms) ease;
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	.combobox-dropdown {
		position: absolute;
		z-index: 50;
		top: 100%;
		left: 0;
		right: 0;
		margin-top: 0.25rem;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
		background-color: var(--background);
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
		animation: dropdown-in var(--transition-fast, 150ms) ease-out;
		overflow: hidden;
	}

	@keyframes dropdown-in {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.search-wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid var(--border);
	}

	.search-icon {
		flex-shrink: 0;
		color: var(--muted-foreground);
	}

	.search-input {
		flex: 1;
		border: none;
		background: transparent;
		color: var(--foreground);
		font-size: var(--text-sm);
		outline: none;
	}

	.search-input::placeholder {
		color: var(--muted-foreground);
	}

	.empty-message {
		padding: 1.5rem 0.75rem;
		text-align: center;
		font-size: var(--text-sm);
		color: var(--muted-foreground);
	}

	.options-list {
		max-height: 12rem;
		overflow-y: auto;
		list-style: none;
		padding: 0.25rem;
		scrollbar-width: thin;
		scrollbar-color: var(--border) transparent;
	}

	.option-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: 0.375rem 0.5rem;
		border-radius: calc(var(--radius, 0.375rem) - 2px);
		font-size: var(--text-sm);
		cursor: pointer;
		transition: background-color var(--transition-fast, 150ms) ease;
	}

	.option-item.highlighted {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.option-item.selected {
		font-weight: var(--font-medium);
	}

	.option-label {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.check-icon {
		flex-shrink: 0;
		color: var(--primary);
	}
</style>
