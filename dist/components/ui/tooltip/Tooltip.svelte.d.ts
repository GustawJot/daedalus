import type { Snippet } from 'svelte';
export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
type Props = {
    id?: string;
    content?: string;
    side?: TooltipSide;
    delay?: number;
    children?: Snippet;
    class?: string;
};
declare const Tooltip: import("svelte").Component<Props, {}, "">;
type Tooltip = ReturnType<typeof Tooltip>;
export default Tooltip;
