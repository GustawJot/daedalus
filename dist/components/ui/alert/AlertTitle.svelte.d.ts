import type { Snippet } from 'svelte';
type Props = {
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const AlertTitle: import("svelte").Component<Props, {}, "">;
type AlertTitle = ReturnType<typeof AlertTitle>;
export default AlertTitle;
