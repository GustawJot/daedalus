import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLTableRowElement> & {
    children?: Snippet;
    class?: string;
};
declare const TableRow: import("svelte").Component<Props, {}, "">;
type TableRow = ReturnType<typeof TableRow>;
export default TableRow;
