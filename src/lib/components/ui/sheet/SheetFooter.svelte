<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="sheet-footer {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.sheet-footer {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.5rem;
	}

	@media (min-width: 640px) {
		.sheet-footer {
			flex-direction: row;
			justify-content: flex-end;
		}
	}
</style>
