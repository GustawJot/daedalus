import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
    children?: Snippet;
    class?: string;
};
declare const Empty: import("svelte").Component<Props, {}, "">;
type Empty = ReturnType<typeof Empty>;
export default Empty;
