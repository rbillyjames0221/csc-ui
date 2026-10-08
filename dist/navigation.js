'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, X } from 'lucide-react';
import React from 'react';
import { cn } from './cn.js';
const links = ['Services', 'Examinations', 'Careers', 'Help'];
export function TopNav({ variant = 'classic' }) {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = React.useState('Services');
    return (_jsxs("header", { className: cn('topnav', `topnav-${variant}`), children: [_jsx("strong", { children: "CSC" }), (variant === 'mobile' ? open : true) && (_jsx("nav", { "aria-label": "Primary", className: variant === 'mobile' && open ? 'topnav-drawer' : undefined, children: links.map((link) => (_jsx("button", { type: "button", className: cn(current === link && 'is-active'), "aria-current": current === link ? 'page' : undefined, onClick: () => { setCurrent(link); setOpen(false); }, children: link }, link))) })), variant === 'mobile' && (_jsx("button", { type: "button", className: "icon-button", "aria-label": open ? 'Close menu' : 'Open menu', onClick: () => setOpen((value) => !value), children: open ? _jsx(X, { size: 18 }) : _jsx(Menu, { size: 18 }) }))] }));
}
