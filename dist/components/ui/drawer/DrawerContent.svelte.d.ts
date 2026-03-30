import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const DrawerContent: import("svelte").Component<Props, {}, "">;
type DrawerContent = ReturnType<typeof DrawerContent>;
export default DrawerContent;
