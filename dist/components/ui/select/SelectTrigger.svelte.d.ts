import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const SelectTrigger: import("svelte").Component<Props, {}, "">;
type SelectTrigger = ReturnType<typeof SelectTrigger>;
export default SelectTrigger;
