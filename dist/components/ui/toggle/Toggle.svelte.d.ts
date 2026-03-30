import type { Snippet } from 'svelte';
import type { Size } from '../types.js';
type Props = {
    pressed?: boolean;
    variant?: 'ghost' | 'outline';
    size?: Size;
    disabled?: boolean;
    onchange?: (pressed: boolean) => void;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const Toggle: import("svelte").Component<Props, {}, "pressed">;
type Toggle = ReturnType<typeof Toggle>;
export default Toggle;
