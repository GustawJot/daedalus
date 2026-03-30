import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const AlertDialogContent: import("svelte").Component<Props, {}, "">;
type AlertDialogContent = ReturnType<typeof AlertDialogContent>;
export default AlertDialogContent;
