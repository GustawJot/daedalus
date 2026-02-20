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
				/* Measure the full scroll height then animate to it */
				isAnimating = true;
				height = contentEl.scrollHeight;
				const onEnd = () => {
					isAnimating = false;
					contentEl?.removeEventListener('transitionend', onEnd);
				};
				contentEl.addEventListener('transitionend', onEnd);
			} else {
				/* When closing, first set height explicitly then collapse to 0 */
				isAnimating = true;
				height = contentEl.scrollHeight;
				/* Force a reflow so the browser registers the current height */
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
	class="accordion-content {className}"
	class:open
	class:animating={isAnimating}
	role="region"
	data-state={open ? 'open' : 'closed'}
	style:height={isAnimating ? `${height}px` : (open ? 'auto' : '0px')}
	aria-hidden={!open}
	{...restProps}
>
	<div class="accordion-content-inner">
		{#if children}{@render children()}{/if}
	</div>
</div>

<style>
	.accordion-content {
		overflow: hidden;
		font-size: 0.875rem;
		line-height: 1.5;
		color: hsl(var(--foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
	}

	.accordion-content.animating {
		transition: height var(--transition-normal, 200ms) ease;
	}

	.accordion-content-inner {
		padding-bottom: 1rem;
	}
</style>
