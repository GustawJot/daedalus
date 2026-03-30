import type { Snippet } from 'svelte';
import type { SheetSide } from './Sheet.svelte';
type Props = {
    id?: string;
    side?: SheetSide;
    open?: boolean;
    onclose?: () => void;
    children?: Snippet;
    class?: string;
};
declare const SheetContent: import("svelte").Component<Props, {}, "">;
type SheetContent = ReturnType<typeof SheetContent>;
export default SheetContent;
