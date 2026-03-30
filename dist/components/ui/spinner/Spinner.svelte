<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	export type SpinnerSize = 'sm' | 'default' | 'lg';

	type Props = SVGAttributes<SVGSVGElement> & {
		size?: SpinnerSize;
		class?: string;
	};

	let {
		size = 'default',
		class: className = '',
		...restProps
	}: Props = $props();

	const sizeMap: Record<SpinnerSize, number> = {
		sm: 16,
		default: 24,
		lg: 36
	};

	const px = $derived(sizeMap[size]);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={px}
	height={px}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="spinner {className}"
	role="status"
	aria-label="Loading"
	{...restProps}
>
	<path d="M21 12a9 9 0 1 1-6.219-8.56" />
</svg>

<style>
	.spinner {
		color: var(--foreground);
		animation: spinner-rotate 1s linear infinite;
	}

	@keyframes spinner-rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
