type Props = {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    onchange?: (checked: boolean) => void;
    class?: string;
    [key: string]: unknown;
};
declare const Switch: import("svelte").Component<Props, {}, "checked">;
type Switch = ReturnType<typeof Switch>;
export default Switch;
