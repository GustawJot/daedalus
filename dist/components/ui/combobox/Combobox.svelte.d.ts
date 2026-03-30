export type ComboboxOption = {
    value: string;
    label: string;
};
type Props = {
    options: ComboboxOption[];
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    emptyMessage?: string;
    class?: string;
    [key: string]: unknown;
};
declare const Combobox: import("svelte").Component<Props, {}, "value">;
type Combobox = ReturnType<typeof Combobox>;
export default Combobox;
