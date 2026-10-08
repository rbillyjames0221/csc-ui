'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart3, ChevronDown, FileText, Home, Settings, Users } from 'lucide-react';
import React from 'react';
import { cn } from './cn';
const items = [
    { label: 'Overview', icon: Home },
    { label: 'Applications', icon: FileText, children: ['New', 'In review'] },
    { label: 'People', icon: Users },
    { label: 'Reports', icon: BarChart3 },
    { label: 'Settings', icon: Settings },
];
export function Sidebar({ variant = 'classic', collapsed = 'false' }) {
    const [active, setActive] = React.useState('Overview');
    const [openGroup, setOpenGroup] = React.useState(true);
    const [narrow, setNarrow] = React.useState(collapsed === 'true' || variant === 'rail');
    React.useEffect(() => { setNarrow(collapsed === 'true' || variant === 'rail'); }, [collapsed, variant]);
    const nav = (_jsx("nav", { "aria-label": "Sample sidebar", children: items.map((item) => {
            const Icon = item.icon;
            const selected = active === item.label;
            return (_jsxs("div", { children: [_jsxs("button", { type: "button", className: cn('sb-link', selected && 'is-active'), "aria-current": selected ? 'page' : undefined, onClick: () => { setActive(item.label); if (item.children)
                            setOpenGroup((value) => !value); }, children: [_jsx(Icon, { size: 18, "aria-hidden": true }), !narrow && _jsx("span", { children: item.label }), !narrow && item.children && _jsx(ChevronDown, { size: 14, "aria-hidden": true })] }), !narrow && item.children && openGroup && variant === 'grouped' && (_jsx("div", { className: "sb-nested", children: item.children.map((child) => (_jsx("button", { type: "button", className: cn('sb-link', 'sb-child', active === child && 'is-active'), onClick: () => setActive(child), children: child }, child))) }))] }, item.label));
        }) }));
    if (variant === 'dual') {
        return (_jsxs("div", { className: "sb sb-dual", children: [_jsx("div", { className: "sb-rail", "aria-label": "Primary", children: items.map((item) => { const Icon = item.icon; return _jsx("button", { type: "button", "aria-label": item.label, className: cn(active === item.label && 'is-active'), onClick: () => setActive(item.label), children: _jsx(Icon, { size: 18 }) }, item.label); }) }), _jsxs("aside", { className: "sb-panel", children: [_jsx("strong", { children: "Applications" }), nav] })] }));
    }
    return (_jsxs("aside", { className: cn('sb', `sb-${variant}`, narrow && 'is-narrow'), children: [_jsxs("div", { className: "sb-brand", children: [_jsx("span", { children: "C" }), !narrow && _jsx("strong", { children: "Workspace" })] }), nav, _jsx("button", { type: "button", className: "sb-collapse", onClick: () => setNarrow((value) => !value), children: narrow ? 'Expand' : 'Collapse' })] }));
}
