import type { Snippet } from 'svelte';
type Props = {
    tone?: 'neutral' | 'critical';
    onclick?: () => void;
    disabled?: boolean;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const AlertDialogAction: import("svelte").Component<Props, {}, "">;
type AlertDialogAction = ReturnType<typeof AlertDialogAction>;
export default AlertDialogAction;
