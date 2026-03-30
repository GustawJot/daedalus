import type { Snippet } from 'svelte';
type Props = {
    open?: boolean;
    openDelay?: number;
    closeDelay?: number;
    children?: Snippet<[{
        open: boolean;
        show: () => void;
        hide: () => void;
    }]>;
};
declare const HoverCard: import("svelte").Component<Props, {}, "open">;
type HoverCard = ReturnType<typeof HoverCard>;
export default HoverCard;
