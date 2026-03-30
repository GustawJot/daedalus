import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLTableSectionElement> & {
    children?: Snippet;
    class?: string;
};
declare const TableFooter: import("svelte").Component<Props, {}, "">;
type TableFooter = ReturnType<typeof TableFooter>;
export default TableFooter;
