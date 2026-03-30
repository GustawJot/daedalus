let counter = 0;
function generateId() {
    return `toast-${++counter}-${Date.now()}`;
}
let toasts = $state([]);
function addToast(message, type = 'default', duration = 5000) {
    const id = generateId();
    const t = { id, message, type, duration };
    toasts = [...toasts, t];
    return id;
}
function removeToast(id) {
    toasts = toasts.filter((t) => t.id !== id);
}
export function getToasts() {
    return toasts;
}
export { removeToast };
export const toast = Object.assign((message, duration) => addToast(message, 'default', duration), {
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    info: (message, duration) => addToast(message, 'info', duration),
    dismiss: (id) => removeToast(id)
});
