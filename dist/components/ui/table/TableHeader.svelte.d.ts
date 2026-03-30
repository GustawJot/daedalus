import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLTableSectionElement> & {
    children?: Snippet;
    class?: string;
};
declare const TableHeader: import("svelte").Component<Props, {}, "">;
type TableHeader = ReturnType<typeof TableHeader>;
export default TableHeader;
