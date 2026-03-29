<script lang="ts">
	import type { Snippet } from 'svelte';

	export type DataTableColumn<T = Record<string, any>> = {
		key: string;
		header: string;
		sortable?: boolean;
		render?: (value: any, row: T) => string;
	};

	export type SortDirection = 'asc' | 'desc';

	type Props<T = Record<string, any>> = {
		id?: string;
		columns: DataTableColumn<T>[];
		data: T[];
		sortKey?: string;
		sortDirection?: SortDirection;
		children?: Snippet<[{ row: T; index: number }]>;
		class?: string;
	};

	let {
		id,
		columns,
		data,
		sortKey = $bindable(''),
		sortDirection = $bindable<SortDirection>('asc'),
		children,
		class: className = ''
	}: Props = $props();

	let sortedData = $derived.by(() => {
		if (!sortKey) return data;

		const col = columns.find((c) => c.key === sortKey);
		if (!col?.sortable) return data;

		return [...data].sort((a, b) => {
			const aVal = (a as Record<string, any>)[sortKey];
			const bVal = (b as Record<string, any>)[sortKey];

			if (aVal == null && bVal == null) return 0;
			if (aVal == null) return 1;
			if (bVal == null) return -1;

			let comparison = 0;
			if (typeof aVal === 'string' && typeof bVal === 'string') {
				comparison = aVal.localeCompare(bVal);
			} else if (typeof aVal === 'number' && typeof bVal === 'number') {
				comparison = aVal - bVal;
			} else {
				comparison = String(aVal).localeCompare(String(bVal));
			}

			return sortDirection === 'asc' ? comparison : -comparison;
		});
	});

	function handleSort(col: DataTableColumn) {
		if (!col.sortable) return;

		if (sortKey === col.key) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = col.key;
			sortDirection = 'asc';
		}
	}
</script>

<div {id} class="data-table-wrapper {className}">
	<table class="data-table">
		<thead>
			<tr>
				{#each columns as col}
					<th
						class="header-cell"
						class:sortable={col.sortable}
						aria-sort={sortKey === col.key
							? sortDirection === 'asc'
								? 'ascending'
								: 'descending'
							: undefined}
					>
						{#if col.sortable}
							<button
								type="button"
								class="header-button"
								onclick={() => handleSort(col)}
							>
								<span>{col.header}</span>
								<span class="sort-icon">
									{#if sortKey === col.key}
										{#if sortDirection === 'asc'}
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
												<path d="m18 15-6-6-6 6"/>
											</svg>
										{:else}
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
												<path d="m6 9 6 6 6-6"/>
											</svg>
										{/if}
									{:else}
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sort-inactive">
											<path d="m7 15 5 5 5-5"/>
											<path d="m7 9 5-5 5 5"/>
										</svg>
									{/if}
								</span>
							</button>
						{:else}
							{col.header}
						{/if}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each sortedData as row, index}
				{#if children}
					{@render children({ row, index })}
				{:else}
					<tr class="data-row">
						{#each columns as col}
							<td class="data-cell">
								{#if col.render}
									{col.render((row as Record<string, any>)[col.key], row)}
								{:else}
									{(row as Record<string, any>)[col.key] ?? ''}
								{/if}
							</td>
						{/each}
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</div>

<style>
	.data-table-wrapper {
		width: 100%;
		overflow-x: auto;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--text-sm);
	}

	thead {
		background-color: color-mix(in srgb, var(--muted) 50%, transparent);
	}

	.header-cell {
		text-align: left;
		padding: 0.75rem 1rem;
		font-weight: var(--font-medium);
		color: var(--muted-foreground);
		border-bottom: 1px solid var(--border);
		white-space: nowrap;
	}

	.header-cell.sortable {
		padding: 0;
	}

	.header-button {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		width: 100%;
		padding: 0.75rem 1rem;
		background: none;
		border: none;
		color: var(--muted-foreground);
		font-size: inherit;
		font-weight: var(--font-medium);
		cursor: pointer;
		text-align: left;
		transition: color var(--transition-fast, 150ms) ease;
	}

	.header-button:hover {
		color: var(--foreground);
	}

	.header-button:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: -2px;
	}

	.sort-icon {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
	}

	.sort-inactive {
		opacity: 0.3;
	}

	.data-row {
		border-bottom: 1px solid var(--border);
		transition: background-color var(--transition-fast, 150ms) ease;
	}

	.data-row:hover {
		background-color: color-mix(in srgb, var(--muted) 30%, transparent);
	}

	.data-row:last-child {
		border-bottom: none;
	}

	.data-cell {
		padding: 0.75rem 1rem;
		color: var(--foreground);
		vertical-align: middle;
	}

	tbody :global(tr) {
		border-bottom: 1px solid var(--border);
		transition: background-color var(--transition-fast, 150ms) ease;
	}

	tbody :global(tr:hover) {
		background-color: color-mix(in srgb, var(--muted) 30%, transparent);
	}

	tbody :global(tr:last-child) {
		border-bottom: none;
	}

	tbody :global(td) {
		padding: 0.75rem 1rem;
		color: var(--foreground);
		vertical-align: middle;
	}
</style>
