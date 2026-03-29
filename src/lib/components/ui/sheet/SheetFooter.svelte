<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="sheet-footer {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sheet-footer {
		display: flex;
		flex-direction: column-reverse;
		gap: var(--space-2);
	}

	@media (min-width: 640px) {
		.sheet-footer {
			flex-direction: row;
			justify-content: flex-end;
		}
	}
</style>
