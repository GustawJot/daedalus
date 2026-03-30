import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
};
declare const CardFooter: import("svelte").Component<Props, {}, "">;
type CardFooter = ReturnType<typeof CardFooter>;
export default CardFooter;
