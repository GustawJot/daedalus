import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const CommandList: import("svelte").Component<Props, {}, "">;
type CommandList = ReturnType<typeof CommandList>;
export default CommandList;
