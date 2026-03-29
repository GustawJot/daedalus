<script lang="ts">
	import type { Snippet } from 'svelte';

	type PageItem = number | 'ellipsis';

	type PaginationContext = {
		pages: PageItem[];
		page: number;
		setPage: (p: number) => void;
		canPrev: boolean;
		canNext: boolean;
	};

	type Props = {
		id?: string;
		page?: number;
		totalPages: number;
		siblingCount?: number;
		children?: Snippet<[PaginationContext]>;
		class?: string;
	};

	let {
		id,
		page = $bindable(1),
		totalPages,
		siblingCount = 1,
		children,
		class: className = ''
	}: Props = $props();

	function setPage(p: number) {
		if (p >= 1 && p <= totalPages) {
			page = p;
		}
	}

	let canPrev = $derived(page > 1);
	let canNext = $derived(page < totalPages);

	let pages = $derived.by(() => {
		const items: PageItem[] = [];

		if (totalPages <= 1) return [1];

		// Always show first page
		items.push(1);

		const leftSibling = Math.max(2, page - siblingCount);
		const rightSibling = Math.min(totalPages - 1, page + siblingCount);

		// Left ellipsis
		if (leftSibling > 2) {
			items.push('ellipsis');
		}

		// Pages around current
		for (let i = leftSibling; i <= rightSibling; i++) {
			if (i !== 1 && i !== totalPages) {
				items.push(i);
			}
		}

		// Right ellipsis
		if (rightSibling < totalPages - 1) {
			items.push('ellipsis');
		}

		// Always show last page
		if (totalPages > 1) {
			items.push(totalPages);
		}

		return items;
	});
</script>

<nav {id} aria-label="Pagination" class="pagination {className}">
	{#if children}
		{@render children({ pages, page, setPage, canPrev, canNext })}
	{/if}
</nav>

<style>
	.pagination {
		display: flex;
		justify-content: center;
	}
</style>
