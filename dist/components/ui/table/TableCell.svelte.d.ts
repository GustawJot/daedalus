import type { Snippet } from 'svelte';
import type { HTMLTdAttributes } from 'svelte/elements';
type Props = HTMLTdAttributes & {
    children?: Snippet;
    class?: string;
};
declare const TableCell: import("svelte").Component<Props, {}, "">;
type TableCell = ReturnType<typeof TableCell>;
export default TableCell;
