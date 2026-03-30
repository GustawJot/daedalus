import type { Snippet } from 'svelte';
interface Props {
    id?: string;
    children?: Snippet;
    class?: string;
}
declare const TableCaption: import("svelte").Component<Props, {}, "">;
type TableCaption = ReturnType<typeof TableCaption>;
export default TableCaption;
