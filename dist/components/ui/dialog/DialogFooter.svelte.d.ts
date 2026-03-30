import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const DialogFooter: import("svelte").Component<Props, {}, "">;
type DialogFooter = ReturnType<typeof DialogFooter>;
export default DialogFooter;
