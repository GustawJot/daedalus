import type { Snippet } from 'svelte';
type Props = {
    open?: boolean;
    x?: number;
    y?: number;
    children?: Snippet<[{
        open: boolean;
        close: () => void;
        x: number;
        y: number;
    }]>;
};
declare const ContextMenu: import("svelte").Component<Props, {
    openAt: (cx: number, cy: number) => void;
}, "x" | "y" | "open">;
type ContextMenu = ReturnType<typeof ContextMenu>;
export default ContextMenu;
