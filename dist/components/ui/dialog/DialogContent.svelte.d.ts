import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const DialogContent: import("svelte").Component<Props, {}, "">;
type DialogContent = ReturnType<typeof DialogContent>;
export default DialogContent;
