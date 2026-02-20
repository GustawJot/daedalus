<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		oncontextmenu?: (e: MouseEvent) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		oncontextmenu,
		children,
		class: className = ''
	}: Props = $props();

	function handleContextMenu(e: MouseEvent) {
		e.preventDefault();
		oncontextmenu?.(e);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="context-trigger {className}" oncontextmenu={handleContextMenu}>
	{#if children}{@render children()}{/if}
</div>

<style>
	.context-trigger {
		display: contents;
	}
</style>
