export type ToastType = 'default' | 'success' | 'error' | 'info';
export type ToastData = {
    id: string;
    message: string;
    type: ToastType;
    duration: number;
};
declare function removeToast(id: string): void;
export declare function getToasts(): ToastData[];
export { removeToast };
type ToastFn = {
    (message: string, duration?: number): string;
    success: (message: string, duration?: number) => string;
    error: (message: string, duration?: number) => string;
    info: (message: string, duration?: number) => string;
    dismiss: (id: string) => void;
};
export declare const toast: ToastFn;
