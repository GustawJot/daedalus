<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		orientation?: 'horizontal' | 'vertical';
		decorative?: boolean;
		class?: string;
	};

	let {
		orientation = 'horizontal',
		decorative = false,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<div
	role={decorative ? 'none' : 'separator'}
	aria-orientation={!decorative ? orientation : undefined}
	class="separator {orientation} {className}"
	{...restProps}
></div>

<style>
	.separator {
		flex-shrink: 0;
		background-color: hsl(var(--border));
	}

	.horizontal {
		height: 1px;
		width: 100%;
	}

	.vertical {
		height: 100%;
		width: 1px;
	}
</style>
