import type { Snippet } from 'svelte';
type Props = {
    value?: string;
    open?: boolean;
    disabled?: boolean;
    name?: string;
    placeholder?: string;
    children?: Snippet<[
        {
            value: string;
            open: boolean;
            disabled: boolean;
            placeholder: string;
            select: (v: string, label?: string) => void;
            toggle: () => void;
            close: () => void;
        }
    ]>;
    class?: string;
    [key: string]: unknown;
};
declare const Select: import("svelte").Component<Props, {}, "value" | "open">;
type Select = ReturnType<typeof Select>;
export default Select;
