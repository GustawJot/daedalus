<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<div {id} class="alertdialog-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.alertdialog-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1-5);
		text-align: center;
	}

	@media (min-width: 640px) {
		.alertdialog-header {
			text-align: left;
		}
	}
</style>
