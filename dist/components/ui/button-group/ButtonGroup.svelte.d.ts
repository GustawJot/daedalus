import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    orientation?: 'horizontal' | 'vertical';
    children?: Snippet;
    class?: string;
};
declare const ButtonGroup: import("svelte").Component<Props, {}, "">;
type ButtonGroup = ReturnType<typeof ButtonGroup>;
export default ButtonGroup;
