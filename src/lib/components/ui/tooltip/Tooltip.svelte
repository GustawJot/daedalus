<script lang="ts">
	import type { Snippet } from 'svelte';

	export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

	type Props = {
		content?: string;
		side?: TooltipSide;
		delay?: number;
		children?: Snippet;
		class?: string;
	};

	let {
		content = '',
		side = 'top',
		delay = 200,
		children,
		class: className = ''
	}: Props = $props();

	let visible = $state(false);
	let timeoutId: ReturnType<typeof setTimeout> | null = $state(null);

	function show() {
		timeoutId = setTimeout(() => {
			visible = true;
		}, delay);
	}

	function hide() {
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		visible = false;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
	class="tooltip-wrapper {className}"
	onmouseenter={show}
	onmouseleave={hide}
	onfocusin={show}
	onfocusout={hide}
>
	{#if children}{@render children()}{/if}
	{#if visible && content}
		<span class="tooltip side-{side}" role="tooltip">
			{content}
			<span class="tooltip-arrow side-{side}"></span>
		</span>
	{/if}
</span>

<style>
	.tooltip-wrapper {
		position: relative;
		display: inline-flex;
	}

	.tooltip {
		position: absolute;
		z-index: var(--z-tooltip, 50);
		white-space: nowrap;
		border-radius: var(--radius, 0.375rem);
		background-color: hsl(var(--foreground));
		color: hsl(var(--background));
		padding: 0.375rem 0.75rem;
		font-size: 0.75rem;
		line-height: 1.4;
		font-family: var(--font-sans, system-ui, sans-serif);
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		pointer-events: none;
		animation: tooltip-in var(--transition-fast, 150ms) ease-out;
	}

	@keyframes tooltip-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.tooltip.side-top {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.5rem;
	}

	.tooltip.side-bottom {
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
	}

	.tooltip.side-left {
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 0.5rem;
	}

	.tooltip.side-right {
		left: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 0.5rem;
	}

	.tooltip-arrow {
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		background-color: hsl(var(--foreground));
		transform: rotate(45deg);
	}

	.tooltip-arrow.side-top {
		bottom: -0.25rem;
		left: 50%;
		margin-left: -0.25rem;
	}

	.tooltip-arrow.side-bottom {
		top: -0.25rem;
		left: 50%;
		margin-left: -0.25rem;
	}

	.tooltip-arrow.side-left {
		right: -0.25rem;
		top: 50%;
		margin-top: -0.25rem;
	}

	.tooltip-arrow.side-right {
		left: -0.25rem;
		top: 50%;
		margin-top: -0.25rem;
	}
</style>
