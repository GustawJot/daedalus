import type { Snippet } from 'svelte';
type Props = {
    label?: string;
    labelFor?: string;
    error?: string;
    description?: string;
    required?: boolean;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const Field: import("svelte").Component<Props, {}, "">;
type Field = ReturnType<typeof Field>;
export default Field;
