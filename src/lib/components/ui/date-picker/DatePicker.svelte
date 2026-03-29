<script lang="ts">
	import Popover from '../popover/Popover.svelte';
	import PopoverContent from '../popover/PopoverContent.svelte';
	import PopoverTrigger from '../popover/PopoverTrigger.svelte';
	import Calendar from '../calendar/Calendar.svelte';

	type Props = {
		id?: string;
		value?: Date | null;
		placeholder?: string;
		disabled?: boolean;
		format?: (date: Date) => string;
		class?: string;
	};

	let {
		id,
		value = $bindable(null),
		placeholder = 'Pick a date',
		disabled = false,
		format = (date: Date) => date.toLocaleDateString(),
		class: className = ''
	}: Props = $props();

	let month = $state(value ? new Date(value.getFullYear(), value.getMonth(), 1) : new Date());

	function handleSelect(date: Date) {
		value = date;
		open = false;
	}

	let open = $state(false);
</script>

<div {id} class="date-picker {className}">
	<Popover bind:open>
		{#snippet children({ open: isOpen, close, toggle })}
			<PopoverTrigger onclick={toggle}>
				<span class="trigger-button" class:placeholder={!value} class:disabled aria-label={value ? format(value) : placeholder}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="calendar-icon"
					>
						<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
						<line x1="16" x2="16" y1="2" y2="6" />
						<line x1="8" x2="8" y1="2" y2="6" />
						<line x1="3" x2="21" y1="10" y2="10" />
					</svg>
					<span class="trigger-text">
						{value ? format(value) : placeholder}
					</span>
				</span>
			</PopoverTrigger>
			<PopoverContent open={isOpen} onclose={close} align="start" class="date-picker-popover">
				<Calendar
					bind:value
					bind:month
					onselect={handleSelect}
				/>
			</PopoverContent>
		{/snippet}
	</Popover>
</div>

<style>
	.date-picker {
		position: relative;
		display: inline-block;
	}

	.trigger-button {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		height: 2.25rem;
		padding: 0 0.75rem;
		border: 1px solid var(--input);
		border-radius: var(--radius, 0.375rem);
		background-color: var(--background);
		color: var(--foreground);
		font-size: var(--text-sm);
		cursor: pointer;
		transition-property: border-color, box-shadow;
		transition-duration: var(--transition-fast, 150ms);
		min-width: 12rem;
		text-align: left;
	}

	.trigger-button:hover:not(.disabled) {
		border-color: var(--ring);
	}

	.trigger-button.placeholder {
		color: var(--muted-foreground);
	}

	.trigger-button.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.calendar-icon {
		flex-shrink: 0;
		color: var(--muted-foreground);
	}

	.trigger-text {
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.date-picker :global(.date-picker-popover) {
		width: auto;
		padding: 0;
	}
</style>
