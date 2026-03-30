import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const DropdownMenuTrigger: import("svelte").Component<Props, {}, "">;
type DropdownMenuTrigger = ReturnType<typeof DropdownMenuTrigger>;
export default DropdownMenuTrigger;
