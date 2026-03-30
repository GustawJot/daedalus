import type { Snippet } from 'svelte';
export type DropdownAlign = 'start' | 'center' | 'end';
type Props = {
    id?: string;
    open?: boolean;
    align?: DropdownAlign;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const DropdownMenuContent: import("svelte").Component<Props, {}, "">;
type DropdownMenuContent = ReturnType<typeof DropdownMenuContent>;
export default DropdownMenuContent;
