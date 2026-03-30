import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
type Props = Omit<HTMLButtonAttributes, 'onclick'> & {
    open?: boolean;
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const AccordionTrigger: import("svelte").Component<Props, {}, "">;
type AccordionTrigger = ReturnType<typeof AccordionTrigger>;
export default AccordionTrigger;
