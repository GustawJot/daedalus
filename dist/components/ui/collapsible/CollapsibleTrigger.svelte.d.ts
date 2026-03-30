import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
type Props = Omit<HTMLButtonAttributes, 'onclick'> & {
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const CollapsibleTrigger: import("svelte").Component<Props, {}, "">;
type CollapsibleTrigger = ReturnType<typeof CollapsibleTrigger>;
export default CollapsibleTrigger;
