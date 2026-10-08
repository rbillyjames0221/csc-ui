'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from 'lucide-react';
import React from 'react';
const ToastContext = React.createContext(() => undefined);
export function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);
    const push = React.useCallback((message, tone = 'success') => {
        const id = Date.now();
        setToasts((current) => [...current, { id, tone, message }]);
        window.setTimeout(() => setToasts((current) => current.filter((item) => item.id !== id)), 3200);
    }, []);
    return (_jsxs(ToastContext.Provider, { value: push, children: [children, _jsx("div", { className: "toast-stack", "aria-live": "polite", children: toasts.map((toast) => (_jsxs("div", { className: `toast toast-${toast.tone}`, role: "status", children: [_jsx("span", { children: toast.message }), _jsx("button", { type: "button", "aria-label": "Dismiss", onClick: () => setToasts((current) => current.filter((item) => item.id !== toast.id)), children: _jsx(X, { size: 14 }) })] }, toast.id))) })] }));
}
export function useToast() {
    return React.useContext(ToastContext);
}
export function ToastDemo({ tone = 'success', message = 'Changes saved' }) {
    const push = useToast();
    return _jsxs("button", { type: "button", className: "csc-button btn-outline btn-md shape-rounded", onClick: () => push(message, tone), children: ["Show ", tone, " toast"] });
}
