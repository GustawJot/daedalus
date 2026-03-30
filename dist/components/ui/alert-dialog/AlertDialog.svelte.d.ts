import type { Snippet } from 'svelte';
type Props = {
    open?: boolean;
    onclose?: () => void;
    children?: Snippet<[{
        open: boolean;
        close: () => void;
    }]>;
};
declare const AlertDialog: import("svelte").Component<Props, {}, "open">;
type AlertDialog = ReturnType<typeof AlertDialog>;
export default AlertDialog;
