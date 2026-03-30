import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string;
    open?: boolean;
    children?: Snippet<[{
        open: boolean;
        toggle: () => void;
    }]>;
    class?: string;
};
declare const AccordionItem: import("svelte").Component<Props, {}, "open">;
type AccordionItem = ReturnType<typeof AccordionItem>;
export default AccordionItem;
