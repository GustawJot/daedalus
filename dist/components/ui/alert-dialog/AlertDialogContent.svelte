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
	<div class="alertdialog-portal">
		<DialogOverlay />
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={contentEl}
			{id}
			class="alertdialog-content {className}"
			role="alertdialog"
			aria-modal="true"
			tabindex="-1"
			onkeydown={handleKeydown}
		>
			{#if children}{@render children()}{/if}
		</div>
	</div>
{/if}

<style>
	.alertdialog-portal {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal, 500);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.alertdialog-content {
		position: relative;
		z-index: var(--z-modal, 500);
		display: grid;
		width: 100%;
		max-width: 32rem;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
		gap: var(--space-4);
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.5rem);
		background-color: var(--background);
		color: var(--foreground);
		padding: 1.5rem;
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
		animation: alertdialog-in var(--transition-normal, 200ms) ease-out;
		outline: none;
	}

	@keyframes alertdialog-in {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(4px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
</style>
