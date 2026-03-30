import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    active?: boolean;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children?: Snippet;
    class?: string;
};
declare const Item: import("svelte").Component<Props, {}, "">;
type Item = ReturnType<typeof Item>;
export default Item;
