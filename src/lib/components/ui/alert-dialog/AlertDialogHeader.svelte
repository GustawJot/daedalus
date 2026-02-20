<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="alertdialog-header {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.alertdialog-header {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		text-align: center;
	}

	@media (min-width: 640px) {
		.alertdialog-header {
			text-align: left;
		}
	}
</style>
