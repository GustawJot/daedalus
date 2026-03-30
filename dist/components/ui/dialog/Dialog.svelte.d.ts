import type { Snippet } from 'svelte';
type Props = {
    open?: boolean;
    onclose?: () => void;
    children?: Snippet<[{
        open: boolean;
        close: () => void;
    }]>;
};
declare const Dialog: import("svelte").Component<Props, {}, "open">;
type Dialog = ReturnType<typeof Dialog>;
export default Dialog;
