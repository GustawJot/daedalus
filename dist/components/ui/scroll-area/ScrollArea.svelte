<script lang="ts">
	import type { Snippet } from 'svelte';

	export type ScrollOrientation = 'vertical' | 'horizontal' | 'both';

	type Props = {
		id?: string;
		orientation?: ScrollOrientation;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		orientation = 'vertical',
		children,
		class: className = ''
	}: Props = $props();
</script>

<div {id} class="scroll-area orientation-{orientation} {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.scroll-area {
		position: relative;
		width: 100%;
	}

	.orientation-vertical {
		overflow-x: hidden;
		overflow-y: auto;
	}

	.orientation-horizontal {
		overflow-x: auto;
		overflow-y: hidden;
	}

	.orientation-both {
		overflow: auto;
	}

	/* Webkit scrollbar styling */
	.scroll-area::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	.scroll-area::-webkit-scrollbar-track {
		background: transparent;
		border-radius: var(--radius-full);
	}

	.scroll-area::-webkit-scrollbar-thumb {
		background-color: var(--border);
		border-radius: var(--radius-full);
		border: 2px solid transparent;
		background-clip: content-box;
	}

	.scroll-area::-webkit-scrollbar-thumb:hover {
		background-color: color-mix(in srgb, var(--muted-foreground) 50%, transparent);
	}

	.scroll-area::-webkit-scrollbar-corner {
		background: transparent;
	}

	/* Firefox scrollbar styling */
	.scroll-area {
		scrollbar-width: thin;
		scrollbar-color: var(--border) transparent;
	}
</style>
