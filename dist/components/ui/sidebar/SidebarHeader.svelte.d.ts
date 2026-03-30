import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const SidebarHeader: import("svelte").Component<Props, {}, "">;
type SidebarHeader = ReturnType<typeof SidebarHeader>;
export default SidebarHeader;
