'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Search } from 'lucide-react';
import React from 'react';
import { cn } from './cn';
export function Input({ label, hint, error, success, required, optional, leading, trailing, appearance = 'outlined', fieldSize = 'md', className, ...props }) {
    const described = error || success || hint;
    const id = props.id || React.useId();
    return (_jsxs("label", { className: cn('field', `field-${appearance}`, `field-${fieldSize}`, error && 'is-error', success && 'is-success'), htmlFor: id, children: [label && (_jsxs("span", { className: "field-label", children: [label, required && _jsx("span", { "aria-hidden": "true", children: " *" }), required && _jsx("span", { className: "sr-only", children: " required" }), optional && _jsx("span", { className: "optional", children: " Optional" })] })), _jsxs("span", { className: "field-control", children: [leading, _jsx("input", { id: id, className: cn('input', error && 'input-error', className), "aria-invalid": error ? true : undefined, "aria-describedby": described ? `${id}-help` : undefined, required: required, ...props }), trailing] }), error ? (_jsx("span", { id: `${id}-help`, className: "field-error", role: "alert", children: error })) : success ? (_jsx("span", { id: `${id}-help`, className: "field-success", children: success })) : hint ? (_jsx("span", { id: `${id}-help`, className: "field-hint", children: hint })) : null] }));
}
export function InputDemo({ appearance = 'outlined', size = 'md', label = 'Full name', placeholder = 'Enter your full name', hint = 'Use the name on your identification', state = 'default', }) {
    return (_jsx(Input, { appearance: appearance, fieldSize: size, label: label, placeholder: placeholder, hint: state === 'default' ? hint : undefined, error: state === 'error' ? 'Enter a name to continue.' : undefined, success: state === 'success' ? 'Looks good.' : undefined, disabled: state === 'disabled', readOnly: state === 'readonly', defaultValue: state === 'readonly' ? 'Sample Applicant' : undefined, required: true, leading: _jsx(Mail, { size: 15, "aria-hidden": true }) }));
}
export function SearchField(props) {
    return _jsx(Input, { label: props.label || 'Search', appearance: "outlined", leading: _jsx(Search, { size: 15, "aria-hidden": true }), ...props });
}
