import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const SidebarContent: import("svelte").Component<Props, {}, "">;
type SidebarContent = ReturnType<typeof SidebarContent>;
export default SidebarContent;
