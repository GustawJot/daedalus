import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const AlertDialogHeader: import("svelte").Component<Props, {}, "">;
type AlertDialogHeader = ReturnType<typeof AlertDialogHeader>;
export default AlertDialogHeader;
