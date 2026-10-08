import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRight } from 'lucide-react';
export function Breadcrumb({ variant = 'standard', items = ['Home', 'Applications', 'Overview'] }) {
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: `breadcrumbs breadcrumb-${variant}`, children: items.map((item, index) => (_jsxs("span", { className: "crumb", children: [index > 0 && _jsx(ChevronRight, { size: variant === 'compact' ? 12 : 14, "aria-hidden": true }), index === items.length - 1 ? _jsx("strong", { children: item }) : _jsx("a", { href: "#breadcrumb", children: item })] }, item))) }));
}
