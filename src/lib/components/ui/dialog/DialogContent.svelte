<script lang="ts">
	import type { Snippet } from 'svelte';
	import DialogOverlay from './DialogOverlay.svelte';

	type Props = {
		open?: boolean;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
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
		// Trap focus
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

	function handleOverlayClick() {
		onclose?.();
	}

	$effect(() => {
		if (open) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			// Focus the content element
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
	<div class="dialog-portal">
		<DialogOverlay onclick={handleOverlayClick} />
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={contentEl}
			class="dialog-content {className}"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			onkeydown={handleKeydown}
		>
			{#if children}{@render children()}{/if}
			<button class="dialog-close" onclick={() => onclose?.()} aria-label="Close">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6 6 18" /><path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	</div>
{/if}

<style>
	.dialog-portal {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal, 500);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dialog-content {
		position: relative;
		z-index: var(--z-modal, 500);
		display: grid;
		width: 100%;
		max-width: 32rem;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
		gap: 1rem;
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius, 0.5rem);
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		padding: 1.5rem;
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
		animation: content-in var(--transition-normal, 200ms) ease-out;
		outline: none;
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	@keyframes content-in {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(4px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.dialog-close {
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

	.dialog-close:hover {
		opacity: 1;
	}

	.dialog-close:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}
</style>
