import type { Snippet } from 'svelte';
type Props = {
    type?: 'single' | 'multiple';
    value?: string | string[];
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
    disabled?: boolean;
    children?: Snippet<[{
        value: string | string[];
        toggle: (itemValue: string) => void;
    }]>;
    class?: string;
};
declare const ToggleGroup: import("svelte").Component<Props, {}, "value">;
type ToggleGroup = ReturnType<typeof ToggleGroup>;
export default ToggleGroup;
