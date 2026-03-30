import type { HTMLInputAttributes } from 'svelte/elements';
type Props = Omit<HTMLInputAttributes, 'value'> & {
    value?: string | number;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    required?: boolean;
    class?: string;
};
declare const Input: import("svelte").Component<Props, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
