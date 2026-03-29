<script lang="ts">
	import type { Snippet } from 'svelte';
	import DialogOverlay from '../dialog/DialogOverlay.svelte';

	type Props = {
		id?: string;
		open?: boolean;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		open = false,
		onclose,
		children,
		class: className = ''
	}: Props = $props();

	let contentEl: HTMLDivElement | undefined = $state();
	let dragStartY: number | null = $state(null);
	let dragCurrentY: number | null = $state(null);
	let translateY = $state(0);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			onclose?.();
		}
		if (e.key === 'Tab' && contentEl) {
			const focusable = contentEl.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		}
	}

	function handlePointerDown(e: PointerEvent) {
		dragStartY = e.clientY;
		dragCurrentY = e.clientY;
	}

	function handlePointerMove(e: PointerEvent) {
		if (dragStartY === null) return;
		dragCurrentY = e.clientY;
		const diff = dragCurrentY - dragStartY;
		translateY = Math.max(0, diff);
	}

	function handlePointerUp() {
		if (translateY > 100) {
			onclose?.();
		}
		translateY = 0;
		dragStartY = null;
		dragCurrentY = null;
	}

	$effect(() => {
		if (open) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			requestAnimationFrame(() => {
				if (contentEl) {
					const focusable = contentEl.querySelector<HTMLElement>(
						'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
					);
					focusable?.focus();
				}
			});
			return () => {
				document.body.style.overflow = prev;
			};
		}
	});
</script>

{#if open}
	<div class="drawer-portal">
		<DialogOverlay onclick={() => onclose?.()} />
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={contentEl}
			{id}
			class="drawer-content {className}"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			style={translateY > 0 ? `transform: translateY(${translateY}px); transition: none;` : ''}
			onkeydown={handleKeydown}
		>
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="drawer-handle-area"
				onpointerdown={handlePointerDown}
				onpointermove={handlePointerMove}
				onpointerup={handlePointerUp}
				onpointercancel={handlePointerUp}
			>
				<div class="drawer-handle"></div>
			</div>
			{#if children}{@render children()}{/if}
		</div>
	</div>
{/if}

<style>
	.drawer-portal {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal, 50);
	}

	.drawer-content {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		display: flex;
		flex-direction: column;
		max-height: 85vh;
		background-color: var(--background);
		color: var(--foreground);
		border: 1px solid var(--border);
		border-bottom: none;
		border-top-left-radius: calc(var(--radius, 0.5rem) * 2);
		border-top-right-radius: calc(var(--radius, 0.5rem) * 2);
		padding: 0 1.5rem 1.5rem;
		box-shadow: var(--shadow-lg, 0 -10px 15px -3px rgb(0 0 0 / 0.1));
		animation: drawer-slide-up var(--transition-normal, 200ms) ease-out;
		outline: none;
		overflow-y: auto;
		touch-action: none;
	}

	@keyframes drawer-slide-up {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	.drawer-handle-area {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 0 0.5rem;
		cursor: grab;
		touch-action: none;
	}

	.drawer-handle-area:active {
		cursor: grabbing;
	}

	.drawer-handle {
		width: 3rem;
		height: 0.25rem;
		border-radius: var(--radius-full);
		background-color: color-mix(in srgb, var(--muted-foreground) 30%, transparent);
	}
</style>
