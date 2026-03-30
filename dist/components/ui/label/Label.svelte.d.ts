import type { Snippet } from 'svelte';
import type { HTMLLabelAttributes } from 'svelte/elements';
type Props = HTMLLabelAttributes & {
    for?: string;
    children?: Snippet;
    class?: string;
};
declare const Label: import("svelte").Component<Props, {}, "">;
type Label = ReturnType<typeof Label>;
export default Label;
