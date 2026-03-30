import type { Snippet } from 'svelte';
type Props = {
    value: string;
    disabled?: boolean;
    id?: string;
    checked?: boolean;
    name?: string;
    onchange?: (value: string) => void;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const RadioGroupItem: import("svelte").Component<Props, {}, "">;
type RadioGroupItem = ReturnType<typeof RadioGroupItem>;
export default RadioGroupItem;
