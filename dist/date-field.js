'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
export function DateField({ variant = 'single', label = 'Appointment date' }) {
    const today = new Date();
    const [cursor, setCursor] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));
    const [start, setStart] = React.useState('');
    const [end, setEnd] = React.useState('');
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const count = daysInMonth(year, month);
    const offset = new Date(year, month, 1).getDay();
    const cells = [...Array(offset).fill(''), ...Array.from({ length: count }, (_, index) => String(index + 1))];
    function iso(day) {
        return `${year}-${String(month + 1).padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    function pick(day) {
        if (!day)
            return;
        const value = iso(day);
        if (variant === 'range') {
            if (!start || (start && end)) {
                setStart(value);
                setEnd('');
                return;
            }
            if (value < start) {
                setEnd(start);
                setStart(value);
                return;
            }
            setEnd(value);
            return;
        }
        setStart(value);
    }
    const calendar = (_jsxs("div", { className: "date-field", children: [_jsxs("div", { className: "date-head", children: [_jsx("span", { className: "field-label", children: variant === 'range' ? 'Date range' : label }), _jsxs("div", { children: [_jsx("button", { type: "button", "aria-label": "Previous month", onClick: () => setCursor(new Date(year, month - 1, 1)), children: "\u2039" }), _jsx("strong", { children: cursor.toLocaleString('en', { month: 'long', year: 'numeric' }) }), _jsx("button", { type: "button", "aria-label": "Next month", onClick: () => setCursor(new Date(year, month + 1, 1)), children: "\u203A" })] })] }), _jsxs("div", { className: "date-grid", role: "grid", "aria-label": "Calendar", children: [['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => _jsx("span", { children: day }, day)), cells.map((day, index) => {
                        const value = day ? iso(day) : '';
                        const selected = value && (value === start || value === end || (start && end && value > start && value < end));
                        return _jsx("button", { type: "button", disabled: !day, "aria-pressed": Boolean(selected), className: selected ? 'is-selected' : undefined, onClick: () => pick(day), children: day }, `${day}-${index}`);
                    })] }), _jsx("p", { className: "field-hint", children: variant === 'range' ? `${start || 'Start'} – ${end || 'End'}` : start || 'No date selected' })] }));
    if (variant !== 'range')
        return calendar;
    return (_jsxs("div", { className: "date-range", children: [calendar, _jsxs("div", { className: "date-field", children: [_jsx("span", { className: "field-label", children: "Selected span" }), _jsxs("p", { children: [start || 'Start date', " \u2013 ", end || 'End date'] })] })] }));
}
