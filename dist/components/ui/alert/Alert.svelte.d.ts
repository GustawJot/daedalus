import type { Snippet } from 'svelte';
import type { Tone } from '../types.js';
type Props = {
    tone?: Tone;
    children?: Snippet;
    class?: string;
    [key: string]: unknown;
};
declare const Alert: import("svelte").Component<Props, {}, "">;
type Alert = ReturnType<typeof Alert>;
export default Alert;
