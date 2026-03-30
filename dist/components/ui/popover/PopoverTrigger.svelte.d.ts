import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const PopoverTrigger: import("svelte").Component<Props, {}, "">;
type PopoverTrigger = ReturnType<typeof PopoverTrigger>;
export default PopoverTrigger;
