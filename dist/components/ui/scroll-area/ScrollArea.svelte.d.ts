import type { Snippet } from 'svelte';
export type ScrollOrientation = 'vertical' | 'horizontal' | 'both';
type Props = {
    id?: string;
    orientation?: ScrollOrientation;
    children?: Snippet;
    class?: string;
};
declare const ScrollArea: import("svelte").Component<Props, {}, "">;
type ScrollArea = ReturnType<typeof ScrollArea>;
export default ScrollArea;
