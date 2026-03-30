import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    checked?: boolean;
    disabled?: boolean;
    onchange?: (checked: boolean) => void;
    children?: Snippet;
    class?: string;
};
declare const ContextMenuCheckboxItem: import("svelte").Component<Props, {}, "checked">;
type ContextMenuCheckboxItem = ReturnType<typeof ContextMenuCheckboxItem>;
export default ContextMenuCheckboxItem;
