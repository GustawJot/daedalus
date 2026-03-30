import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    children?: Snippet;
    class?: string;
};
declare const AccordionContent: import("svelte").Component<Props, {}, "">;
type AccordionContent = ReturnType<typeof AccordionContent>;
export default AccordionContent;
