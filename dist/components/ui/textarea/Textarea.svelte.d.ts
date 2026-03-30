import type { HTMLTextareaAttributes } from 'svelte/elements';
type Props = Omit<HTMLTextareaAttributes, 'value'> & {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
    id?: string;
    name?: string;
    required?: boolean;
    class?: string;
};
declare const Textarea: import("svelte").Component<Props, {}, "value">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
