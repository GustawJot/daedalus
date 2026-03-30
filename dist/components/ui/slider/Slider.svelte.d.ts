type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    id?: string;
    name?: string;
    onchange?: (value: number) => void;
    class?: string;
    [key: string]: unknown;
};
declare const Slider: import("svelte").Component<Props, {}, "value">;
type Slider = ReturnType<typeof Slider>;
export default Slider;
