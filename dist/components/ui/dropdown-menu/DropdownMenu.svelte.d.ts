import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    open?: boolean;
    children?: Snippet<[{
        open: boolean;
        close: () => void;
        toggle: () => void;
    }]>;
};
declare const DropdownMenu: import("svelte").Component<Props, {}, "open">;
type DropdownMenu = ReturnType<typeof DropdownMenu>;
export default DropdownMenu;
