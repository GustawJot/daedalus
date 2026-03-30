import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted';
type Props = HTMLAttributes<HTMLElement> & {
    variant?: TypographyVariant;
    as?: string;
    children?: Snippet;
    class?: string;
};
declare const Typography: import("svelte").Component<Props, {}, "">;
type Typography = ReturnType<typeof Typography>;
export default Typography;
