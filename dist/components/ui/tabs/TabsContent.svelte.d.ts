import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string;
    activeValue?: string;
    children?: Snippet;
    class?: string;
};
declare const TabsContent: import("svelte").Component<Props, {}, "">;
type TabsContent = ReturnType<typeof TabsContent>;
export default TabsContent;
