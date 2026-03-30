import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Tone } from '../types.js';
type BadgeVariant = 'filled' | 'tonal' | 'outline';
type Props = HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
    tone?: Tone;
    children?: Snippet;
    class?: string;
};
declare const Badge: import("svelte").Component<Props, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
