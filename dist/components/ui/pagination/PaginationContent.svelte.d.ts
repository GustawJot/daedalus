import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const PaginationContent: import("svelte").Component<Props, {}, "">;
type PaginationContent = ReturnType<typeof PaginationContent>;
export default PaginationContent;
