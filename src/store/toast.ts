import { atom } from 'nanostores';

export interface ToastMessage {
    title: string;
    message: string;
    type: 'success' | 'error' | 'info';
    duration?: number;
}

export const toastState = atom<ToastMessage | null>(null);

export function showToast(toast: ToastMessage) {
    toastState.set(toast);
    if (toast.duration !== 0) {
        setTimeout(() => {
            // Only clear if it's still the same toast (simple check)
            // Ideally we'd have IDs but for now single toast is fine
            if (toastState.get() === toast) {
                toastState.set(null);
            }
        }, toast.duration || 5000);
    }
}

export function hideToast() {
    toastState.set(null);
}
