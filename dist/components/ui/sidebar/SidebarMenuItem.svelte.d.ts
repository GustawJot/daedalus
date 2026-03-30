import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    children?: Snippet;
    class?: string;
};
declare const SidebarMenuItem: import("svelte").Component<Props, {}, "open">;
type SidebarMenuItem = ReturnType<typeof SidebarMenuItem>;
export default SidebarMenuItem;
