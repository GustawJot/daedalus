import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    href: string;
    children?: Snippet;
    class?: string;
};
declare const BreadcrumbLink: import("svelte").Component<Props, {}, "">;
type BreadcrumbLink = ReturnType<typeof BreadcrumbLink>;
export default BreadcrumbLink;
