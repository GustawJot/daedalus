import type { Snippet } from 'svelte';
import type { Size } from '../types.js';
type Props = {
    value: string;
    pressed?: boolean;
    variant?: 'ghost' | 'outline';
    size?: Size;
    disabled?: boolean;
    onclick?: (value: string) => void;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const ToggleGroupItem: import("svelte").Component<Props, {}, "">;
type ToggleGroupItem = ReturnType<typeof ToggleGroupItem>;
export default ToggleGroupItem;
