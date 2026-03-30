import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const DialogHeader: import("svelte").Component<Props, {}, "">;
type DialogHeader = ReturnType<typeof DialogHeader>;
export default DialogHeader;
