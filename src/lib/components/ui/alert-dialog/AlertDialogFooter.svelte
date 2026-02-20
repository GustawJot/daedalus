<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class="alertdialog-footer {className}">
	{#if children}{@render children()}{/if}
</div>

<style>
	.alertdialog-footer {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.5rem;
	}

	@media (min-width: 640px) {
		.alertdialog-footer {
			flex-direction: row;
			justify-content: flex-end;
		}
	}
</style>
