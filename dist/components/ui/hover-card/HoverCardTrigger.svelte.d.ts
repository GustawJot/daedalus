import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    onmouseenter?: () => void;
    onmouseleave?: () => void;
    children?: Snippet;
    class?: string;
};
declare const HoverCardTrigger: import("svelte").Component<Props, {}, "">;
type HoverCardTrigger = ReturnType<typeof HoverCardTrigger>;
export default HoverCardTrigger;
