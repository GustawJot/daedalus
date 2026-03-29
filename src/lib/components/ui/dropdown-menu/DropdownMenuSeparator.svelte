<script lang="ts">
	type Props = {
		id?: string;
		class?: string;
	};

	let { id, class: className = '' }: Props = $props();
</script>

<div {id} class="dropdown-separator {className}" role="separator"></div>

<style>
	.dropdown-separator {
		height: 1px;
		margin: 0.25rem -0.25rem;
		background-color: var(--border);
	}
</style>
