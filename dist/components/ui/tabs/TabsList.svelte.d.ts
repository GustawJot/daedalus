import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    class?: string;
};
declare const TabsList: import("svelte").Component<Props, {}, "">;
type TabsList = ReturnType<typeof TabsList>;
export default TabsList;
