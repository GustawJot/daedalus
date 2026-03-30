import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
};
declare const Accordion: import("svelte").Component<Props, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
