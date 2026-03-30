import type { Snippet } from 'svelte';
export type Variant = 'filled' | 'tonal' | 'outline' | 'ghost' | 'link';
export type Tone = 'neutral' | 'critical' | 'success' | 'caution' | 'info';
export type Size = 'sm' | 'md' | 'lg';
export type InteractiveProps = {
    variant?: Variant;
    tone?: Tone;
    size?: Size;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
};
export type FormControlProps = {
    label?: string;
    error?: string;
    description?: string;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    name?: string;
    id?: string;
};
