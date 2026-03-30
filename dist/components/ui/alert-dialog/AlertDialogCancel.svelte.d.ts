import type { Snippet } from 'svelte';
type Props = {
    onclick?: () => void;
    disabled?: boolean;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const AlertDialogCancel: import("svelte").Component<Props, {}, "">;
type AlertDialogCancel = ReturnType<typeof AlertDialogCancel>;
export default AlertDialogCancel;
