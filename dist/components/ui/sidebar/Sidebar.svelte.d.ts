import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    width?: string;
    collapsedWidth?: string;
    children?: Snippet;
    class?: string;
};
declare const Sidebar: import("svelte").Component<Props, {}, "open">;
type Sidebar = ReturnType<typeof Sidebar>;
export default Sidebar;
