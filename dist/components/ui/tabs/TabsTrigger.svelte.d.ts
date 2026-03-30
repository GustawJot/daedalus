import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
type Props = Omit<HTMLButtonAttributes, 'onclick'> & {
    value?: string;
    active?: boolean;
    onclick?: () => void;
    children?: Snippet;
    class?: string;
};
declare const TabsTrigger: import("svelte").Component<Props, {}, "">;
type TabsTrigger = ReturnType<typeof TabsTrigger>;
export default TabsTrigger;
