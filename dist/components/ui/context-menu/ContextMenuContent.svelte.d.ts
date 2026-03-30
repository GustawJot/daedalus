import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    x?: number;
    y?: number;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const ContextMenuContent: import("svelte").Component<Props, {}, "">;
type ContextMenuContent = ReturnType<typeof ContextMenuContent>;
export default ContextMenuContent;
