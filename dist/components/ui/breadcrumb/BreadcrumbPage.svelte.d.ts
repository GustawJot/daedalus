import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const BreadcrumbPage: import("svelte").Component<Props, {}, "">;
type BreadcrumbPage = ReturnType<typeof BreadcrumbPage>;
export default BreadcrumbPage;
