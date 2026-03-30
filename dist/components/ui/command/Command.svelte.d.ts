import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    children?: Snippet;
    class?: string;
};
declare const Command: import("svelte").Component<Props, {}, "">;
type Command = ReturnType<typeof Command>;
export default Command;
