'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from './cn.js';
const offices = ['Central Office', 'National Capital Region', 'Regional Office III', 'Regional Office VII', 'BARMM'];
export function SelectField({ label = 'Office', variant = 'standard', hint, }) {
    const [query, setQuery] = React.useState('');
    const [value, setValue] = React.useState(offices[0]);
    const [open, setOpen] = React.useState(false);
    const id = React.useId();
    if (variant === 'searchable') {
        const matches = offices.filter((office) => office.toLowerCase().includes(query.toLowerCase()));
        return (_jsxs("div", { className: "field", children: [_jsx("label", { className: "field-label", htmlFor: id, children: label }), _jsx("input", { id: id, className: "input", role: "combobox", "aria-expanded": open, "aria-autocomplete": "list", "aria-controls": `${id}-list`, value: query || value, onChange: (event) => { setQuery(event.target.value); setOpen(true); }, onFocus: () => setOpen(true) }), open && (_jsxs("ul", { id: `${id}-list`, role: "listbox", className: "combo-list", children: [matches.map((office) => (_jsx("li", { role: "option", "aria-selected": office === value, children: _jsx("button", { type: "button", onClick: () => { setValue(office); setQuery(''); setOpen(false); }, children: office }) }, office))), !matches.length && _jsx("li", { className: "combo-empty", children: "No matching office" })] }))] }));
    }
    return (_jsxs("label", { className: cn('field', variant === 'compact' && 'field-sm'), children: [_jsx("span", { className: "field-label", children: label }), _jsx("select", { className: "input", defaultValue: offices[0], "aria-describedby": hint ? `${id}-hint` : undefined, children: offices.map((office) => _jsx("option", { children: office }, office)) }), hint && _jsx("span", { id: `${id}-hint`, className: "field-hint", children: hint })] }));
}
