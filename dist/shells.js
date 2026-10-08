'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Badge } from './badge';
import { Chart } from './charts';
import { cn } from './cn';
import { Sidebar } from './sidebar';
import { StatCard } from './card';
import { TopNav } from './navigation';
import { sampleRows } from './sample';
export function DashboardShell({ variant = 'classic', children, title = 'Dashboard overview' }) {
    const sidebar = variant === 'compact' ? 'rail' : variant === 'floating' ? 'floating' : variant === 'public' ? '' : 'classic';
    return (_jsxs("div", { className: cn('shell', `shell-${variant}`), children: [variant === 'public' ? _jsx(TopNav, { variant: "classic" }) : _jsx(Sidebar, { variant: sidebar, collapsed: variant === 'compact' ? 'true' : 'false' }), _jsxs("div", { className: "shell-main", children: [_jsxs("header", { className: "shell-head", children: [_jsxs("div", { children: [_jsx("small", { children: "SAMPLE WORKSPACE" }), _jsx("h2", { children: title })] }), _jsx("span", { className: "avatar", children: "CS" })] }), children || (_jsxs(_Fragment, { children: [_jsxs("div", { className: "shell-metrics", children: [_jsx(StatCard, { title: "Applications", value: "2,840" }), _jsx(StatCard, { title: "In review", value: "184" }), _jsx(StatCard, { title: "Completed", value: "1,928" })] }), variant !== 'public' && _jsx(Chart, { variant: "bar" }), _jsxs("div", { className: "csc-card", children: [_jsx("strong", { children: "Recent applications" }), _jsx("p", { className: "demo-note", children: "Demonstration data only." }), _jsx("ul", { className: "shell-list", children: sampleRows.slice(0, 4).map((row) => (_jsxs("li", { children: [_jsx("span", { children: row.name }), _jsx("span", { children: row.id }), _jsx(Badge, { tone: row.status === 'Approved' ? 'green' : 'amber', children: row.status })] }, row.id))) })] })] }))] })] }));
}
