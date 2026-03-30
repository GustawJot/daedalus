import type { Snippet } from 'svelte';
interface Props {
    id?: string;
    value?: string;
    children?: Snippet<[{
        value: string;
        set: (v: string) => void;
    }]>;
    class?: string;
}
declare const Tabs: import("svelte").Component<Props, {}, "value">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
