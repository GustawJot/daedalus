import type { Snippet } from 'svelte';
type Props = {
    open?: boolean;
    onclose?: () => void;
    children?: Snippet<[{
        close: () => void;
    }]>;
};
declare const Drawer: import("svelte").Component<Props, {}, "open">;
type Drawer = ReturnType<typeof Drawer>;
export default Drawer;
