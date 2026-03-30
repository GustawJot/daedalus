import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
    class?: string;
};
declare const Separator: import("svelte").Component<Props, {}, "">;
type Separator = ReturnType<typeof Separator>;
export default Separator;
