<script lang="ts">
	type Props = {
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
		id?: string;
		name?: string;
		onchange?: (value: number) => void;
		class?: string;
	};

	let {
		value = $bindable(0),
		min = 0,
		max = 100,
		step = 1,
		disabled = false,
		id,
		name,
		onchange,
		class: className = ''
	}: Props = $props();

	let percentage = $derived(((value - min) / (max - min)) * 100);

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		value = Number(target.value);
		onchange?.(value);
	}
</script>

<div class="slider-wrapper {className}" class:disabled>
	<input
		type="range"
		class="slider"
		{min}
		{max}
		{step}
		{disabled}
		{id}
		{name}
		bind:value
		oninput={handleInput}
		style="--slider-percentage: {percentage}%"
	/>
</div>

<style>
	.slider-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}

	.slider-wrapper.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.slider {
		width: 100%;
		height: 0.5rem;
		cursor: pointer;
		appearance: none;
		-webkit-appearance: none;
		background: transparent;
		outline: none;
		margin: 0;
	}

	.slider:disabled {
		cursor: not-allowed;
	}

	/* Track — WebKit */
	.slider::-webkit-slider-runnable-track {
		height: 0.5rem;
		border-radius: 9999px;
		background: linear-gradient(
			to right,
			hsl(var(--primary)) 0%,
			hsl(var(--primary)) var(--slider-percentage, 0%),
			hsl(var(--secondary)) var(--slider-percentage, 0%),
			hsl(var(--secondary)) 100%
		);
	}

	/* Track — Firefox */
	.slider::-moz-range-track {
		height: 0.5rem;
		border-radius: 9999px;
		background: hsl(var(--secondary));
	}

	.slider::-moz-range-progress {
		height: 0.5rem;
		border-radius: 9999px;
		background: hsl(var(--primary));
	}

	/* Thumb — WebKit */
	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background-color: hsl(var(--background));
		border: 2px solid hsl(var(--primary));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		margin-top: -0.375rem;
		cursor: pointer;
		transition-property: box-shadow, transform;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slider::-webkit-slider-thumb:hover {
		transform: scale(1.1);
	}

	.slider:focus-visible::-webkit-slider-thumb {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}

	/* Thumb — Firefox */
	.slider::-moz-range-thumb {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 9999px;
		background-color: hsl(var(--background));
		border: 2px solid hsl(var(--primary));
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
		cursor: pointer;
		transition-property: box-shadow, transform;
		transition-duration: var(--transition-fast, 150ms);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slider::-moz-range-thumb:hover {
		transform: scale(1.1);
	}

	.slider:focus-visible::-moz-range-thumb {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 2px;
	}
</style>
