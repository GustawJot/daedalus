import type { Snippet } from 'svelte';
import type { HTMLTableAttributes } from 'svelte/elements';
type Props = HTMLTableAttributes & {
    children?: Snippet;
    class?: string;
};
declare const Table: import("svelte").Component<Props, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
