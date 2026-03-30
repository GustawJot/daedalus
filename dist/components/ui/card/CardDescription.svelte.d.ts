import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLParagraphElement> & {
    children?: Snippet;
    class?: string;
};
declare const CardDescription: import("svelte").Component<Props, {}, "">;
type CardDescription = ReturnType<typeof CardDescription>;
export default CardDescription;
