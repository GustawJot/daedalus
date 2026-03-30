import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    oncontextmenu?: (e: MouseEvent) => void;
    children?: Snippet;
    class?: string;
};
declare const ContextMenuTrigger: import("svelte").Component<Props, {}, "">;
type ContextMenuTrigger = ReturnType<typeof ContextMenuTrigger>;
export default ContextMenuTrigger;
