import type { Snippet } from 'svelte';
export type PopoverAlign = 'start' | 'center' | 'end';
export type PopoverSide = 'top' | 'bottom';
type Props = {
    id?: string;
    open?: boolean;
    align?: PopoverAlign;
    side?: PopoverSide;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const PopoverContent: import("svelte").Component<Props, {}, "">;
type PopoverContent = ReturnType<typeof PopoverContent>;
export default PopoverContent;
