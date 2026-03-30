<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id?: string;
		value?: Date | null;
		month?: Date;
		minDate?: Date | null;
		maxDate?: Date | null;
		disabled?: boolean;
		onselect?: (date: Date) => void;
		class?: string;
	};

	let {
		id,
		value = $bindable(null),
		month = $bindable(new Date()),
		minDate = null,
		maxDate = null,
		disabled = false,
		onselect,
		class: className = ''
	}: Props = $props();

	const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
	const MONTHS = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	let focusedDate = $state<Date | null>(null);

	function getYear() {
		return month.getFullYear();
	}

	function getMonth() {
		return month.getMonth();
	}

	let calendarDays = $derived.by(() => {
		const year = getYear();
		const m = getMonth();
		const firstDay = new Date(year, m, 1);
		const lastDay = new Date(year, m + 1, 0);
		const startDayOfWeek = firstDay.getDay();
		const daysInMonth = lastDay.getDate();

		const days: Array<{ date: Date; isCurrentMonth: boolean }> = [];

		// Previous month days
		const prevMonthLastDay = new Date(year, m, 0).getDate();
		for (let i = startDayOfWeek - 1; i >= 0; i--) {
			days.push({
				date: new Date(year, m - 1, prevMonthLastDay - i),
				isCurrentMonth: false
			});
		}

		// Current month days
		for (let d = 1; d <= daysInMonth; d++) {
			days.push({
				date: new Date(year, m, d),
				isCurrentMonth: true
			});
		}

		// Next month days to fill the grid (always show 6 rows)
		const remaining = 42 - days.length;
		for (let d = 1; d <= remaining; d++) {
			days.push({
				date: new Date(year, m + 1, d),
				isCurrentMonth: false
			});
		}

		return days;
	});

	function isToday(date: Date): boolean {
		const today = new Date();
		return (
			date.getDate() === today.getDate() &&
			date.getMonth() === today.getMonth() &&
			date.getFullYear() === today.getFullYear()
		);
	}

	function isSelected(date: Date): boolean {
		if (!value) return false;
		return (
			date.getDate() === value.getDate() &&
			date.getMonth() === value.getMonth() &&
			date.getFullYear() === value.getFullYear()
		);
	}

	function isDisabledDate(date: Date): boolean {
		if (disabled) return true;
		if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
		if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
		return false;
	}

	function selectDate(date: Date) {
		if (isDisabledDate(date)) return;
		value = date;
		onselect?.(date);
	}

	function prevMonth() {
		month = new Date(getYear(), getMonth() - 1, 1);
	}

	function nextMonth() {
		month = new Date(getYear(), getMonth() + 1, 1);
	}

	function handleKeydown(e: KeyboardEvent, date: Date) {
		let newDate: Date | null = null;

		switch (e.key) {
			case 'ArrowLeft':
				e.preventDefault();
				newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
				break;
			case 'ArrowRight':
				e.preventDefault();
				newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
				break;
			case 'ArrowUp':
				e.preventDefault();
				newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
				break;
			case 'ArrowDown':
				e.preventDefault();
				newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
				break;
			case 'Enter':
			case ' ':
				e.preventDefault();
				selectDate(date);
				return;
			default:
				return;
		}

		if (newDate && !isDisabledDate(newDate)) {
			focusedDate = newDate;
			// Update month view if we've navigated outside current month
			if (newDate.getMonth() !== getMonth() || newDate.getFullYear() !== getYear()) {
				month = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
			}
			// Focus the new cell after DOM update
			requestAnimationFrame(() => {
				const el = document.querySelector(`[data-date="${newDate!.toISOString().split('T')[0]}"]`) as HTMLElement;
				el?.focus();
			});
		}
	}
</script>

<div {id} class="calendar {className}" role="application" aria-label="Calendar">
	<div class="calendar-header">
		<button
			type="button"
			class="nav-button"
			onclick={prevMonth}
			aria-label="Previous month"
			{disabled}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="m15 18-6-6 6-6" />
			</svg>
		</button>
		<span class="calendar-title">
			{MONTHS[getMonth()]} {getYear()}
		</span>
		<button
			type="button"
			class="nav-button"
			onclick={nextMonth}
			aria-label="Next month"
			{disabled}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="m9 18 6-6-6-6" />
			</svg>
		</button>
	</div>

	<table class="calendar-grid" role="grid" aria-label="{MONTHS[getMonth()]} {getYear()}">
		<thead>
			<tr>
				{#each DAYS as day}
					<th scope="col" class="day-header" aria-label={day}>
						{day}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each { length: 6 } as _, weekIdx}
				<tr>
					{#each { length: 7 } as _, dayIdx}
						{@const dayInfo = calendarDays[weekIdx * 7 + dayIdx]}
						{@const dateDisabled = isDisabledDate(dayInfo.date)}
						<td role="gridcell">
							<button
								type="button"
								class="day-cell"
								class:today={isToday(dayInfo.date)}
								class:selected={isSelected(dayInfo.date)}
								class:outside={!dayInfo.isCurrentMonth}
								disabled={dateDisabled}
								data-date={dayInfo.date.toISOString().split('T')[0]}
								tabindex={isSelected(dayInfo.date) || (focusedDate && dayInfo.date.toISOString().split('T')[0] === focusedDate.toISOString().split('T')[0]) ? 0 : -1}
								aria-label={dayInfo.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
								onclick={() => selectDate(dayInfo.date)}
								onkeydown={(e) => handleKeydown(e, dayInfo.date)}
							>
								{dayInfo.date.getDate()}
							</button>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.calendar {
		width: fit-content;
		padding: 0.75rem;
		background-color: var(--background);
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
		user-select: none;
		-webkit-user-select: none;
	}

	.calendar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 0.5rem;
	}

	.calendar-title {
		font-size: var(--text-sm);
		font-weight: var(--font-semibold);
		color: var(--foreground);
	}

	.nav-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
		background-color: transparent;
		color: var(--foreground);
		cursor: pointer;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
	}

	.nav-button:hover:not(:disabled) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.nav-button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.calendar-grid {
		border-collapse: collapse;
		border-spacing: 0;
	}

	.day-header {
		width: 2.25rem;
		height: 2rem;
		font-size: var(--text-xs);
		font-weight: var(--font-medium);
		color: var(--muted-foreground);
		text-align: center;
	}

	td {
		text-align: center;
	}

	.day-cell {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border: none;
		border-radius: var(--radius, 0.375rem);
		background-color: transparent;
		color: var(--foreground);
		font-size: var(--text-sm);
		cursor: pointer;
		transition-property: background-color, color;
		transition-duration: var(--transition-fast, 150ms);
	}

	.day-cell:hover:not(:disabled):not(.selected) {
		background-color: var(--accent);
		color: var(--accent-foreground);
	}

	.day-cell.today:not(.selected) {
		background-color: var(--accent);
		color: var(--accent-foreground);
		font-weight: var(--font-semibold);
	}

	.day-cell.selected {
		background-color: var(--primary);
		color: var(--primary-foreground);
		font-weight: var(--font-semibold);
	}

	.day-cell.outside {
		color: var(--muted-foreground);
		opacity: 0.5;
	}

	.day-cell:disabled {
		opacity: 0.35;
		pointer-events: none;
	}
</style>
