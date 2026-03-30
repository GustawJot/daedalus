import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    children?: Snippet;
    class?: string;
    onmouseenter?: () => void;
    onmouseleave?: () => void;
};
declare const HoverCardContent: import("svelte").Component<Props, {}, "">;
type HoverCardContent = ReturnType<typeof HoverCardContent>;
export default HoverCardContent;
