type Props = {
    id?: string;
    page: number;
    active?: boolean;
    onclick?: () => void;
    class?: string;
};
declare const PaginationItem: import("svelte").Component<Props, {}, "">;
type PaginationItem = ReturnType<typeof PaginationItem>;
export default PaginationItem;
