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
declare const Pagination: import("svelte").Component<Props, {}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
