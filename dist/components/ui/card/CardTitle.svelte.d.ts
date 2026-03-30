import type { Snippet } from 'svelte';
interface Props {
    id?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    children?: Snippet;
    class?: string;
}
declare const CardTitle: import("svelte").Component<Props, {}, "">;
type CardTitle = ReturnType<typeof CardTitle>;
export default CardTitle;
