<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="dialog-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.dialog-header {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		text-align: center;
	}

	@media (min-width: 640px) {
		.dialog-header {
			text-align: left;
		}
	}
</style>
