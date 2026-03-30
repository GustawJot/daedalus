<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		children?: Snippet;
		class?: string;
	};

	let { id, children, class: className = '' }: Props = $props();
</script>

<p {id} class="alertdialog-description {className}">
	{#if children}{@render children()}{/if}
</p>

<style>
	.alertdialog-description {
		font-size: var(--text-sm);
		color: var(--muted-foreground);
	}
</style>
