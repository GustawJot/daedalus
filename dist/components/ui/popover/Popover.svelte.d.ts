import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    children?: Snippet<[{
        open: boolean;
        close: () => void;
        toggle: () => void;
    }]>;
};
declare const Popover: import("svelte").Component<Props, {}, "open">;
type Popover = ReturnType<typeof Popover>;
export default Popover;
