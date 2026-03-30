import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    value?: string;
    checked?: boolean;
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const DropdownMenuRadioItem: import("svelte").Component<Props, {}, "">;
type DropdownMenuRadioItem = ReturnType<typeof DropdownMenuRadioItem>;
export default DropdownMenuRadioItem;
