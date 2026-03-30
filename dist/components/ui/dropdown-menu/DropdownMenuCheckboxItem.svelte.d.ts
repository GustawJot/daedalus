import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    checked?: boolean;
    disabled?: boolean;
    onchange?: (checked: boolean) => void;
    children?: Snippet;
    class?: string;
};
declare const DropdownMenuCheckboxItem: import("svelte").Component<Props, {}, "checked">;
type DropdownMenuCheckboxItem = ReturnType<typeof DropdownMenuCheckboxItem>;
export default DropdownMenuCheckboxItem;
