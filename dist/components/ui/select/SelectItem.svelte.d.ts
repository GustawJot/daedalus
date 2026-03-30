import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
    onclick?: (value: string) => void;
    children?: Snippet;
    class?: string;
};
declare const SelectItem: import("svelte").Component<Props, {}, "">;
type SelectItem = ReturnType<typeof SelectItem>;
export default SelectItem;
