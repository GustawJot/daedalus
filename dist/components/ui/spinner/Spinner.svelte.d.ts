import type { SVGAttributes } from 'svelte/elements';
export type SpinnerSize = 'sm' | 'default' | 'lg';
type Props = SVGAttributes<SVGSVGElement> & {
    size?: SpinnerSize;
    class?: string;
};
declare const Spinner: import("svelte").Component<Props, {}, "">;
type Spinner = ReturnType<typeof Spinner>;
export default Spinner;
