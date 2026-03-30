import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    heading?: string;
    children?: Snippet;
    class?: string;
};
declare const CommandGroup: import("svelte").Component<Props, {}, "">;
type CommandGroup = ReturnType<typeof CommandGroup>;
export default CommandGroup;
