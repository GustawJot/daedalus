import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    href?: string;
    active?: boolean;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children?: Snippet;
    class?: string;
};
declare const SidebarItem: import("svelte").Component<Props, {}, "">;
type SidebarItem = ReturnType<typeof SidebarItem>;
export default SidebarItem;
