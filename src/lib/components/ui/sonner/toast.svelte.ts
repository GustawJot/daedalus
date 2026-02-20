export type ToastType = 'default' | 'success' | 'error' | 'info';

export type ToastData = {
	id: string;
	message: string;
	type: ToastType;
	duration: number;
};

let counter = 0;

function generateId(): string {
	return `toast-${++counter}-${Date.now()}`;
}

let toasts = $state<ToastData[]>([]);

function addToast(message: string, type: ToastType = 'default', duration = 5000): string {
	const id = generateId();
	const t: ToastData = { id, message, type, duration };
	toasts = [...toasts, t];
	return id;
}

function removeToast(id: string) {
	toasts = toasts.filter((t) => t.id !== id);
}

export function getToasts(): ToastData[] {
	return toasts;
}

export { removeToast };

type ToastFn = {
	(message: string, duration?: number): string;
	success: (message: string, duration?: number) => string;
	error: (message: string, duration?: number) => string;
	info: (message: string, duration?: number) => string;
	dismiss: (id: string) => void;
};

export const toast: ToastFn = Object.assign(
	(message: string, duration?: number) => addToast(message, 'default', duration),
	{
		success: (message: string, duration?: number) => addToast(message, 'success', duration),
		error: (message: string, duration?: number) => addToast(message, 'error', duration),
		info: (message: string, duration?: number) => addToast(message, 'info', duration),
		dismiss: (id: string) => removeToast(id)
	}
);
