import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    children?: Snippet;
    class?: string;
};
declare const CollapsibleContent: import("svelte").Component<Props, {}, "">;
type CollapsibleContent = ReturnType<typeof CollapsibleContent>;
export default CollapsibleContent;
