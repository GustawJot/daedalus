type Props = {
    id?: string;
    value?: Date | null;
    month?: Date;
    minDate?: Date | null;
    maxDate?: Date | null;
    disabled?: boolean;
    onselect?: (date: Date) => void;
    class?: string;
};
declare const Calendar: import("svelte").Component<Props, {}, "value" | "month">;
type Calendar = ReturnType<typeof Calendar>;
export default Calendar;
