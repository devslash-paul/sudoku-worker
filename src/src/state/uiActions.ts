import { SHOW_TOAST, HIDE_TOAST } from "./actionTypes";

export type ShowToastEvent = {
    type: typeof SHOW_TOAST,
    message: string
}

export type HideToastEvent = {
    type: typeof HIDE_TOAST
}

export function showToast(message: string): ShowToastEvent {
    return {
        type: SHOW_TOAST,
        message,
    }
}

export function hideToast(): HideToastEvent {
    return {
        type: HIDE_TOAST
    }
}