<script lang="ts">
	import type { Snippet } from 'svelte';

	export type PopoverAlign = 'start' | 'center' | 'end';
	export type PopoverSide = 'top' | 'bottom';

	type Props = {
		id?: string;
		open?: boolean;
		align?: PopoverAlign;
		side?: PopoverSide;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		open = false,
		align = 'center',
		side = 'bottom',
		onclose,
		children,
		class: className = ''
	}: Props = $props();

	let contentEl: HTMLDivElement | undefined = $state();

	function handleClickOutside(e: MouseEvent) {
		if (contentEl && !contentEl.contains(e.target as Node)) {
			onclose?.();
		}
	}

	$effect(() => {
		if (open) {
			const handler = (e: MouseEvent) => handleClickOutside(e);
			// Delay to avoid the trigger click from immediately closing
			const timer = setTimeout(() => {
				document.addEventListener('click', handler, true);
			}, 0);
			return () => {
				clearTimeout(timer);
				document.removeEventListener('click', handler, true);
			};
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			onclose?.();
		}
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		{id}
		bind:this={contentEl}
		class="popover-content align-{align} side-{side} {className}"
		role="dialog"
		tabindex="-1"
		onkeydown={handleKeydown}
	>
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.popover-content {
		position: absolute;
		z-index: var(--z-popover, 50);
		width: 18rem;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.5rem);
		background-color: var(--background);
		color: var(--foreground);
		padding: 1rem;
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
		outline: none;
		animation: popover-in var(--transition-fast, 150ms) ease-out;
	}

	@keyframes popover-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.side-bottom {
		top: 100%;
		margin-top: 0.25rem;
	}

	.side-top {
		bottom: 100%;
		margin-bottom: 0.25rem;
	}

	.align-center {
		left: 50%;
		transform: translateX(-50%);
	}

	.align-start {
		left: 0;
	}

	.align-end {
		right: 0;
	}

	/* Override transform for animation when centered */
	.align-center.side-bottom,
	.align-center.side-top {
		animation: popover-in-center var(--transition-fast, 150ms) ease-out;
	}

	@keyframes popover-in-center {
		from {
			opacity: 0;
			transform: translateX(-50%) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) scale(1);
		}
	}
</style>
