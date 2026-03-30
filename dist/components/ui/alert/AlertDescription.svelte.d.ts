import type { Snippet } from 'svelte';
type Props = {
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const AlertDescription: import("svelte").Component<Props, {}, "">;
type AlertDescription = ReturnType<typeof AlertDescription>;
export default AlertDescription;
