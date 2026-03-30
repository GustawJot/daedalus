import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const SidebarMenu: import("svelte").Component<Props, {}, "">;
type SidebarMenu = ReturnType<typeof SidebarMenu>;
export default SidebarMenu;
