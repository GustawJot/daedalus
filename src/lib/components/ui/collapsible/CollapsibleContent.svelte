<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		open?: boolean;
		children?: Snippet;
		class?: string;
	};

	let {
		open = false,
		children,
		class: className = '',
		...restProps
	}: Props = $props();

	let contentEl: HTMLDivElement | undefined = $state();
	let height = $state(0);
	let isAnimating = $state(false);

	$effect(() => {
		if (contentEl) {
			if (open) {
				isAnimating = true;
				height = contentEl.scrollHeight;
				const onEnd = () => {
					isAnimating = false;
					contentEl?.removeEventListener('transitionend', onEnd);
				};
				contentEl.addEventListener('transitionend', onEnd);
			} else {
				isAnimating = true;
				height = contentEl.scrollHeight;
				contentEl.offsetHeight;
				requestAnimationFrame(() => {
					height = 0;
					const onEnd = () => {
						isAnimating = false;
						contentEl?.removeEventListener('transitionend', onEnd);
					};
					contentEl?.addEventListener('transitionend', onEnd);
				});
			}
		}
	});
</script>

<div
	bind:this={contentEl}
	class="collapsible-content {className}"
	class:open
	class:animating={isAnimating}
	data-state={open ? 'open' : 'closed'}
	style:height={isAnimating ? `${height}px` : (open ? 'auto' : '0px')}
	aria-hidden={!open}
	{...restProps}
>
	<div class="collapsible-content-inner">
		{#if children}{@render children()}{/if}
	</div>
</div>

<style>
	.collapsible-content {
		overflow: hidden;
		font-family: var(--font-sans, system-ui, sans-serif);
		color: hsl(var(--foreground));
	}

	.collapsible-content.animating {
		transition: height var(--transition-normal, 200ms) ease;
	}

	.collapsible-content-inner {
		padding: 0;
	}
</style>
