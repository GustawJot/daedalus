import type { Snippet } from 'svelte';
import type { HTMLThAttributes } from 'svelte/elements';
type Props = HTMLThAttributes & {
    children?: Snippet;
    class?: string;
};
declare const TableHead: import("svelte").Component<Props, {}, "">;
type TableHead = ReturnType<typeof TableHead>;
export default TableHead;
