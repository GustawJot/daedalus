<script lang="ts">
	type Props = {
		class?: string;
	};

	let {
		class: className = ''
	}: Props = $props();
</script>

<div class="select-separator {className}" role="separator"></div>

<style>
	.select-separator {
		height: 1px;
		margin: 0.25rem -0.25rem;
		background-color: hsl(var(--border));
	}
</style>
