export type ToastPosition = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
type Props = {
    id?: string;
    position?: ToastPosition;
    duration?: number;
    class?: string;
};
declare const Toaster: import("svelte").Component<Props, {}, "">;
type Toaster = ReturnType<typeof Toaster>;
export default Toaster;
