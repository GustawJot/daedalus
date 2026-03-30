import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
};
declare const CardHeader: import("svelte").Component<Props, {}, "">;
type CardHeader = ReturnType<typeof CardHeader>;
export default CardHeader;
