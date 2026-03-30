<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		open?: boolean;
		x?: number;
		y?: number;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		open = false,
		x = 0,
		y = 0,
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
			contentEl.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemcheckbox"]:not([aria-disabled="true"])')
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
		{id}
		class="contextmenu-content {className}"
		role="menu"
		tabindex="-1"
		style="top: {y}px; left: {x}px;"
		onkeydown={handleKeydown}
	>
		{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.contextmenu-content {
		position: fixed;
		z-index: var(--z-popover, 50);
		min-width: 8rem;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
		background-color: var(--background);
		color: var(--foreground);
		padding: 0.25rem;
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
		outline: none;
		animation: contextmenu-in var(--transition-fast, 150ms) ease-out;
		overflow: hidden;
	}

	@keyframes contextmenu-in {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
