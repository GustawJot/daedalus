<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SheetSide } from './Sheet.svelte';
	import DialogOverlay from '../dialog/DialogOverlay.svelte';

	type Props = {
		side?: SheetSide;
		open?: boolean;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		side = 'right',
		open = false,
		onclose,
		children,
		class: className = ''
	}: Props = $props();

	let contentEl: HTMLDivElement | undefined = $state();

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
	<div class="sheet-portal">
		<DialogOverlay onclick={() => onclose?.()} />
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={contentEl}
			class="sheet-content side-{side} {className}"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			onkeydown={handleKeydown}
		>
			{#if children}{@render children()}{/if}
			<button class="sheet-close" onclick={() => onclose?.()} aria-label="Close">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6 6 18" /><path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	</div>
{/if}

<style>
	.sheet-portal {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal, 50);
	}

	.sheet-content {
		position: fixed;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		border: 1px solid hsl(var(--border));
		padding: 1.5rem;
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
		outline: none;
		overflow-y: auto;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.side-right {
		top: 0;
		right: 0;
		bottom: 0;
		width: 75%;
		max-width: 24rem;
		border-left: 1px solid hsl(var(--border));
		animation: slide-in-right var(--transition-normal, 200ms) ease-out;
	}

	.side-left {
		top: 0;
		left: 0;
		bottom: 0;
		width: 75%;
		max-width: 24rem;
		border-right: 1px solid hsl(var(--border));
		animation: slide-in-left var(--transition-normal, 200ms) ease-out;
	}

	.side-top {
		top: 0;
		left: 0;
		right: 0;
		max-height: 75vh;
		border-bottom: 1px solid hsl(var(--border));
		animation: slide-in-top var(--transition-normal, 200ms) ease-out;
	}

	.side-bottom {
		bottom: 0;
		left: 0;
		right: 0;
		max-height: 75vh;
		border-top: 1px solid hsl(var(--border));
		animation: slide-in-bottom var(--transition-normal, 200ms) ease-out;
	}

	@keyframes slide-in-right {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}

	@keyframes slide-in-left {
		from { transform: translateX(-100%); }
		to { transform: translateX(0); }
	}

	@keyframes slide-in-top {
		from { transform: translateY(-100%); }
		to { transform: translateY(0); }
	}

	@keyframes slide-in-bottom {
		from { transform: translateY(100%); }
		to { transform: translateY(0); }
	}

	.sheet-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		padding: 0;
		border: none;
		border-radius: var(--radius, 0.25rem);
		background: transparent;
		color: hsl(var(--muted-foreground));
		cursor: pointer;
		opacity: 0.7;
		transition: opacity var(--transition-fast, 150ms) ease;
	}

	.sheet-close:hover {
		opacity: 1;
	}

	.sheet-close:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}
</style>
