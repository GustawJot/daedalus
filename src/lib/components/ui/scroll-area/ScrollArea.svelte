<script lang="ts">
	import type { Snippet } from 'svelte';

	export type ScrollOrientation = 'vertical' | 'horizontal' | 'both';

	type Props = {
		orientation?: ScrollOrientation;
		children?: Snippet;
		class?: string;
	};

	let {
		orientation = 'vertical',
		children,
		class: className = ''
	}: Props = $props();
</script>

<div class="scroll-area orientation-{orientation} {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.scroll-area {
		position: relative;
		width: 100%;
		height: 100%;
		font-family: var(--font-sans, system-ui, sans-serif);
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
		border-radius: 9999px;
	}

	.scroll-area::-webkit-scrollbar-thumb {
		background-color: hsl(var(--border));
		border-radius: 9999px;
		border: 2px solid transparent;
		background-clip: content-box;
	}

	.scroll-area::-webkit-scrollbar-thumb:hover {
		background-color: hsl(var(--muted-foreground) / 0.5);
	}

	.scroll-area::-webkit-scrollbar-corner {
		background: transparent;
	}

	/* Firefox scrollbar styling */
	.scroll-area {
		scrollbar-width: thin;
		scrollbar-color: hsl(var(--border)) transparent;
	}
</style>
