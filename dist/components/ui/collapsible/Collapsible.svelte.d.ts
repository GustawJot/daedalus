import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    children?: Snippet<[{
        open: boolean;
        toggle: () => void;
    }]>;
    class?: string;
};
declare const Collapsible: import("svelte").Component<Props, {}, "open">;
type Collapsible = ReturnType<typeof Collapsible>;
export default Collapsible;
