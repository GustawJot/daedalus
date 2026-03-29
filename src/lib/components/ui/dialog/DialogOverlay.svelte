<script lang="ts">
	type Props = {
		id?: string;
		onclick?: () => void;
	};

	let { id, onclick }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div {id} class="dialog-overlay" onclick={onclick} onkeydown={() => {}}></div>

<style>
	.dialog-overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-overlay, 400);
		background-color: rgb(0 0 0 / 0.8);
		animation: overlay-in var(--transition-normal, 200ms) ease-out;
	}

	@keyframes overlay-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
