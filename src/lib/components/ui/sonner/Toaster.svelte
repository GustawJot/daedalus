<script lang="ts">
	import { getToasts, removeToast, type ToastData } from './toast.svelte.ts';

	export type ToastPosition =
		| 'top-left'
		| 'top-right'
		| 'top-center'
		| 'bottom-left'
		| 'bottom-right'
		| 'bottom-center';

	type Props = {
		id?: string;
		position?: ToastPosition;
		duration?: number;
		class?: string;
	};

	let {
		id,
		position = 'bottom-right',
		duration = 5000,
		class: className = ''
	}: Props = $props();

	let dismissing = $state<Set<string>>(new Set());

	let toasts = $derived(getToasts());

	function dismiss(id: string) {
		dismissing = new Set([...dismissing, id]);
		setTimeout(() => {
			removeToast(id);
			const next = new Set(dismissing);
			next.delete(id);
			dismissing = next;
		}, 300);
	}

	function startTimer(id: string, dur: number) {
		const timeout = setTimeout(() => dismiss(id), dur);
		return () => clearTimeout(timeout);
	}

	$effect(() => {
		const cleanups: Array<() => void> = [];
		for (const t of toasts) {
			if (!dismissing.has(t.id)) {
				cleanups.push(startTimer(t.id, t.duration || duration));
			}
		}
		return () => cleanups.forEach((fn) => fn());
	});

	function getTypeIcon(type: string): string {
		switch (type) {
			case 'success':
				return 'M20 6 9 17l-5-5';
			case 'error':
				return 'M18 6 6 18M6 6l12 12';
			case 'info':
				return 'M12 16v-4M12 8h.01';
			default:
				return '';
		}
	}
</script>

<div {id} class="toaster position-{position} {className}" aria-live="polite" aria-relevant="additions">
	{#each toasts as t (t.id)}
		<div
			class="toast toast-{t.type}"
			class:dismissing={dismissing.has(t.id)}
			role="alert"
		>
			{#if t.type !== 'default'}
				<span class="toast-icon toast-icon-{t.type}">
					{#if t.type === 'success'}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12" />
						</svg>
					{:else if t.type === 'error'}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10" />
							<line x1="15" x2="9" y1="9" y2="15" />
							<line x1="9" x2="15" y1="9" y2="15" />
						</svg>
					{:else if t.type === 'info'}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10" />
							<path d="M12 16v-4" />
							<path d="M12 8h.01" />
						</svg>
					{/if}
				</span>
			{/if}
			<span class="toast-message">{t.message}</span>
			<button
				type="button"
				class="toast-close"
				onclick={() => dismiss(t.id)}
				aria-label="Dismiss"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	{/each}
</div>

<style>
	.toaster {
		position: fixed;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		max-width: 24rem;
		width: 100%;
		pointer-events: none;
		padding: 1rem;
	}

	.position-top-left {
		top: 0;
		left: 0;
	}

	.position-top-right {
		top: 0;
		right: 0;
	}

	.position-top-center {
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.position-bottom-left {
		bottom: 0;
		left: 0;
		flex-direction: column-reverse;
	}

	.position-bottom-right {
		bottom: 0;
		right: 0;
		flex-direction: column-reverse;
	}

	.position-bottom-center {
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		flex-direction: column-reverse;
	}

	.toast {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: 0.75rem 1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius, 0.375rem);
		background-color: var(--background);
		color: var(--foreground);
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1));
		font-size: var(--text-sm);
		pointer-events: auto;
		animation: toast-enter 0.3s ease-out;
	}

	.toast.dismissing {
		animation: toast-exit 0.3s ease-in forwards;
	}

	@keyframes toast-enter {
		from {
			opacity: 0;
			transform: translateY(0.5rem) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes toast-exit {
		from {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		to {
			opacity: 0;
			transform: translateY(0.5rem) scale(0.95);
		}
	}

	.toast-success {
		border-color: color-mix(in srgb, var(--success) 30%, transparent);
	}

	.toast-error {
		border-color: color-mix(in srgb, var(--destructive) 30%, transparent);
	}

	.toast-info {
		border-color: color-mix(in srgb, var(--primary) 30%, transparent);
	}

	.toast-icon {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
	}

	.toast-icon-success {
		color: var(--success);
	}

	.toast-icon-error {
		color: var(--destructive);
	}

	.toast-icon-info {
		color: var(--primary);
	}

	.toast-message {
		flex: 1;
		line-height: var(--leading-snug);
	}

	.toast-close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 1.25rem;
		height: 1.25rem;
		border: none;
		border-radius: 2px;
		background: transparent;
		color: var(--muted-foreground);
		cursor: pointer;
		opacity: 0.5;
		transition: opacity var(--transition-fast, 150ms) ease;
	}

	.toast-close:hover {
		opacity: 1;
	}

	.toast-close:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
		opacity: 1;
	}
</style>
