import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLTableSectionElement> & {
    children?: Snippet;
    class?: string;
};
declare const TableBody: import("svelte").Component<Props, {}, "">;
type TableBody = ReturnType<typeof TableBody>;
export default TableBody;
