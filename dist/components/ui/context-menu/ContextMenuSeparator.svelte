<script lang="ts">
	type Props = {
		id?: string;
		class?: string;
	};

	let { id, class: className = '' }: Props = $props();
</script>

<div {id} class="contextmenu-separator {className}" role="separator"></div>

<style>
	.contextmenu-separator {
		height: 1px;
		margin: 0.25rem -0.25rem;
		background-color: var(--border);
	}
</style>
