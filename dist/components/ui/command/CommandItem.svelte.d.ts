import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    value?: string;
    disabled?: boolean;
    onselect?: (value: string) => void;
    keywords?: string[];
    children?: Snippet;
    class?: string;
};
declare const CommandItem: import("svelte").Component<Props, {}, "">;
type CommandItem = ReturnType<typeof CommandItem>;
export default CommandItem;
