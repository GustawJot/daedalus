import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const SidebarGroup: import("svelte").Component<Props, {}, "">;
type SidebarGroup = ReturnType<typeof SidebarGroup>;
export default SidebarGroup;
