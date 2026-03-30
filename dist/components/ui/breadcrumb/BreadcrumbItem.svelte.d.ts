import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const BreadcrumbItem: import("svelte").Component<Props, {}, "">;
type BreadcrumbItem = ReturnType<typeof BreadcrumbItem>;
export default BreadcrumbItem;
