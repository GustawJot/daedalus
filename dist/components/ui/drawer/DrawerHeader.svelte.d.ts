import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const DrawerHeader: import("svelte").Component<Props, {}, "">;
type DrawerHeader = ReturnType<typeof DrawerHeader>;
export default DrawerHeader;
