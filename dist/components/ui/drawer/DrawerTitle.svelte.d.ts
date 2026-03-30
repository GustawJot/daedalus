import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const DrawerTitle: import("svelte").Component<Props, {}, "">;
type DrawerTitle = ReturnType<typeof DrawerTitle>;
export default DrawerTitle;
