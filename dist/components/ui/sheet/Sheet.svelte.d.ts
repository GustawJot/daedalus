import type { Snippet } from 'svelte';
export type SheetSide = 'top' | 'right' | 'bottom' | 'left';
type Props = {
    open?: boolean;
    side?: SheetSide;
    onclose?: () => void;
    children?: Snippet<[{
        close: () => void;
    }]>;
};
declare const Sheet: import("svelte").Component<Props, {}, "open">;
type Sheet = ReturnType<typeof Sheet>;
export default Sheet;
