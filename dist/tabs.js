'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from './cn.js';
const tabs = ['Overview', 'Details', 'Activity'];
export function Tabs({ variant = 'underline' }) {
    const [current, setCurrent] = React.useState(tabs[0]);
    return (_jsxs("div", { className: cn('tabs', `tabs-${variant}`), children: [_jsx("div", { role: "tablist", "aria-label": "Sample sections", children: tabs.map((tab) => (_jsx("button", { type: "button", role: "tab", "aria-selected": current === tab, className: cn(current === tab && 'is-active'), onClick: () => setCurrent(tab), children: tab }, tab))) }), _jsxs("div", { role: "tabpanel", className: "muted", children: [current, " content is currently selected."] })] }));
}
