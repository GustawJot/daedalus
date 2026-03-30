import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const SheetHeader: import("svelte").Component<Props, {}, "">;
type SheetHeader = ReturnType<typeof SheetHeader>;
export default SheetHeader;
