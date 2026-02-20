<script lang="ts">
	import type { Snippet } from 'svelte';

	export type DropdownAlign = 'start' | 'center' | 'end';

	type Props = {
		open?: boolean;
		align?: DropdownAlign;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		open = false,
		align = 'start',
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
			const timer = setTimeout(() => {
				document.addEventListener('click', handler, true);
			}, 0);
			requestAnimationFrame(() => {
				if (contentEl) {
					const firstItem = contentEl.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])');
					firstItem?.focus();
				}
			});
			return () => {
				clearTimeout(timer);
				document.removeEventListener('click', handler, true);
			};
		}
	});

	function handleKeydown(e: KeyboardEvent) {
		if (!contentEl) return;

		const items = Array.from(
			contentEl.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemcheckbox"]:not([aria-disabled="true"]), [role="menuitemradio"]:not([aria-disabled="true"])')
		);
		const currentIndex = items.indexOf(document.activeElement as HTMLElement);

		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				onclose?.();
				break;
			case 'ArrowDown':
				e.preventDefault();
				if (currentIndex < items.length - 1) {
					items[currentIndex + 1]?.focus();
				} else {
					items[0]?.focus();
				}
				break;
			case 'ArrowUp':
				e.preventDefault();
				if (currentIndex > 0) {
					items[currentIndex - 1]?.focus();
				} else {
					items[items.length - 1]?.focus();
				}
				break;
			case 'Home':
				e.preventDefault();
				items[0]?.focus();
				break;
			case 'End':
				e.preventDefault();
				items[items.length - 1]?.focus();
				break;
		}
	}
</script>

{#if open}
	<div
		bind:this={contentEl}
		class="dropdown-content align-{align} {className}"
		role="menu"
		tabindex="-1"
		onkeydown={handleKeydown}
	>
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.dropdown-content {
		position: absolute;
		z-index: var(--z-popover, 50);
		top: 100%;
		margin-top: 0.25rem;
		min-width: 8rem;
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius, 0.375rem);
		background-color: hsl(var(--background));
		color: hsl(var(--foreground));
		padding: 0.25rem;
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
		outline: none;
		font-family: var(--font-sans, system-ui, sans-serif);
		animation: dropdown-in var(--transition-fast, 150ms) ease-out;
		overflow: hidden;
	}

	@keyframes dropdown-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.align-start {
		left: 0;
	}

	.align-center {
		left: 50%;
		transform: translateX(-50%);
	}

	.align-end {
		right: 0;
	}

	.align-center {
		animation: dropdown-in-center var(--transition-fast, 150ms) ease-out;
	}

	@keyframes dropdown-in-center {
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
