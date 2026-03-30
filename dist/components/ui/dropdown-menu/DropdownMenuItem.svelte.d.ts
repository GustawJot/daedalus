import type { Snippet } from 'svelte';
type Props = {
    disabled?: boolean;
    tone?: 'neutral' | 'critical';
    onclick?: () => void;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const DropdownMenuItem: import("svelte").Component<Props, {}, "">;
type DropdownMenuItem = ReturnType<typeof DropdownMenuItem>;
export default DropdownMenuItem;
