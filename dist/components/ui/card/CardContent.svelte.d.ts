import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
};
declare const CardContent: import("svelte").Component<Props, {}, "">;
type CardContent = ReturnType<typeof CardContent>;
export default CardContent;
