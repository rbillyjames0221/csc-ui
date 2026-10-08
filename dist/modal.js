'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as Dialog from '@radix-ui/react-dialog';
import { Check, X } from 'lucide-react';
import { Alert } from './alert.js';
import { Button } from './button.js';
import { Input } from './input.js';
const titles = {
    standard: 'Review application',
    minimal: 'Confirm action',
    drawer: 'Edit record',
    fullscreen: 'Application workflow',
    sheet: 'Quick actions',
    destructive: 'Delete this record?',
};
export function Modal({ kind = 'standard', trigger }) {
    const destructive = kind === 'destructive';
    const label = trigger || (kind === 'sheet' ? 'Bottom sheet' : kind === 'destructive' ? 'Delete' : kind.charAt(0).toUpperCase() + kind.slice(1));
    return (_jsxs(Dialog.Root, { children: [_jsx(Dialog.Trigger, { asChild: true, children: _jsx(Button, { variant: destructive ? 'danger' : 'outline', children: label }) }), _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: "dialog-overlay" }), _jsxs(Dialog.Content, { className: `dialog-content dialog-${kind === 'destructive' ? 'standard' : kind}`, onPointerDownOutside: (event) => { if (destructive)
                            event.preventDefault(); }, onEscapeKeyDown: (event) => { if (destructive)
                            event.preventDefault(); }, children: [_jsxs("div", { className: "dialog-head", children: [_jsxs("div", { children: [_jsx(Dialog.Title, { className: "dialog-title", children: titles[kind] || titles.standard }), _jsx(Dialog.Description, { className: "muted", children: destructive ? 'This sample action cannot be undone. Choose Delete or Cancel.' : 'Demonstration data only. Confirm the details before continuing.' })] }), !destructive && (_jsx(Dialog.Close, { className: "icon-button", "aria-label": "Close dialog", children: _jsx(X, { size: 18 }) }))] }), _jsx("div", { className: "dialog-body", children: destructive ? _jsx(Alert, { tone: "error", children: "You are about to remove sample record CSC-2026-00421." }) : (_jsxs(_Fragment, { children: [_jsx(Input, { label: "Application reference", defaultValue: "CSC-2026-00421", readOnly: true }), _jsx(Input, { label: "Applicant name", defaultValue: "Sample Applicant" }), _jsx(Alert, { tone: "info", children: "This is demonstration data only." })] })) }), _jsxs("div", { className: "dialog-foot", children: [_jsx(Dialog.Close, { asChild: true, children: _jsx(Button, { variant: "secondary", children: "Cancel" }) }), _jsx(Dialog.Close, { asChild: true, children: _jsx(Button, { variant: destructive ? 'danger' : 'primary', children: destructive ? 'Delete' : _jsxs(_Fragment, { children: ["Confirm ", _jsx(Check, { size: 15 })] }) }) })] })] })] })] }));
}
