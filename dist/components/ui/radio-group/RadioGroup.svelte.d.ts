import type { Snippet } from 'svelte';
type Props = {
    value?: string;
    name?: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    onchange?: (value: string) => void;
    children?: Snippet<[{
        value: string;
        set: (v: string) => void;
    }]>;
    class?: string;
    [key: string]: unknown;
};
declare const RadioGroup: import("svelte").Component<Props, {}, "value">;
type RadioGroup = ReturnType<typeof RadioGroup>;
export default RadioGroup;
