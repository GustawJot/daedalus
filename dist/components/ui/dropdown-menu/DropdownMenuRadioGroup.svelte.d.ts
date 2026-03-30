import type { Snippet } from 'svelte';
type Props = {
    id?: string;
    value?: string;
    children?: Snippet<[{
        value: string;
        set: (v: string) => void;
    }]>;
};
declare const DropdownMenuRadioGroup: import("svelte").Component<Props, {}, "value">;
type DropdownMenuRadioGroup = ReturnType<typeof DropdownMenuRadioGroup>;
export default DropdownMenuRadioGroup;
