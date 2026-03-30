import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const BreadcrumbSeparator: import("svelte").Component<Props, {}, "">;
type BreadcrumbSeparator = ReturnType<typeof BreadcrumbSeparator>;
export default BreadcrumbSeparator;
