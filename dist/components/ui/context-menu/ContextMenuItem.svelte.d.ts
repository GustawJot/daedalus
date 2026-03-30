import type { Snippet } from 'svelte';
type Props = {
    disabled?: boolean;
    tone?: 'neutral' | 'critical';
    onclick?: () => void;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const ContextMenuItem: import("svelte").Component<Props, {}, "">;
type ContextMenuItem = ReturnType<typeof ContextMenuItem>;
export default ContextMenuItem;
