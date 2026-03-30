<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="dialog-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.dialog-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1-5);
		text-align: center;
	}

	@media (min-width: 640px) {
		.dialog-header {
			text-align: left;
		}
	}
</style>
