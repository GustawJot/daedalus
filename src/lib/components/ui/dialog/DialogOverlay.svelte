<script lang="ts">
	type Props = {
		onclick?: () => void;
	};

	let { onclick }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="dialog-overlay" onclick={onclick} onkeydown={() => {}}></div>

<style>
	.dialog-overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-overlay, 50);
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
