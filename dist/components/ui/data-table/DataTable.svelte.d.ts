import type { Snippet } from 'svelte';
export type DataTableColumn<T = Record<string, any>> = {
    key: string;
    header: string;
    sortable?: boolean;
    render?: (value: any, row: T) => string;
};
export type SortDirection = 'asc' | 'desc';
type Props<T = Record<string, any>> = {
    id?: string;
    columns: DataTableColumn<T>[];
    data: T[];
    sortKey?: string;
    sortDirection?: SortDirection;
    children?: Snippet<[{
        row: T;
        index: number;
    }]>;
    class?: string;
};
declare const DataTable: import("svelte").Component<Props<Record<string, any>>, {}, "sortKey" | "sortDirection">;
type DataTable = ReturnType<typeof DataTable>;
export default DataTable;
