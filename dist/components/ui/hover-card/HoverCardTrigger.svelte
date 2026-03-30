<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		onmouseenter?: () => void;
		onmouseleave?: () => void;
		children?: Snippet;
		class?: string;
	};

	let {
		id,
		onmouseenter,
		onmouseleave,
		children,
		class: className = ''
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
	{id}
	class="hovercard-trigger {className}"
	onmouseenter={onmouseenter}
	onmouseleave={onmouseleave}
	onfocusin={onmouseenter}
	onfocusout={onmouseleave}
>
	{#if children}{@render children()}{/if}
</span>

<style>
	.hovercard-trigger {
		display: inline-flex;
		position: relative;
		cursor: pointer;
	}
</style>
