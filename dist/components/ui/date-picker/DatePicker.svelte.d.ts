type Props = {
    id?: string;
    value?: Date | null;
    placeholder?: string;
    disabled?: boolean;
    format?: (date: Date) => string;
    class?: string;
};
declare const DatePicker: import("svelte").Component<Props, {}, "value">;
type DatePicker = ReturnType<typeof DatePicker>;
export default DatePicker;
