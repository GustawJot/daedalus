import type { Snippet } from 'svelte';
type Props = {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    required?: boolean;
    onchange?: (checked: boolean) => void;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const Checkbox: import("svelte").Component<Props, {}, "checked">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
