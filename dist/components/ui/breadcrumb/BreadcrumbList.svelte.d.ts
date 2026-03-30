import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const BreadcrumbList: import("svelte").Component<Props, {}, "">;
type BreadcrumbList = ReturnType<typeof BreadcrumbList>;
export default BreadcrumbList;
