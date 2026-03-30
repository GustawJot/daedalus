import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const CommandEmpty: import("svelte").Component<Props, {}, "">;
type CommandEmpty = ReturnType<typeof CommandEmpty>;
export default CommandEmpty;
