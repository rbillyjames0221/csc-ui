'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button } from './button';
export function Pagination({ variant = 'numbered', pages = 4 }) {
    const [page, setPage] = React.useState(1);
    const go = (next) => setPage(Math.min(pages, Math.max(1, next)));
    return (_jsxs("nav", { "aria-label": "Pagination", className: "pager", children: [_jsx(Button, { variant: "outline", onClick: () => go(page - 1), disabled: page === 1, children: "Previous" }), variant !== 'simple' && Array.from({ length: pages }, (_, index) => index + 1).map((number) => (variant === 'compact' && number !== 1 && number !== pages && Math.abs(number - page) > 0 ? null : (_jsx(Button, { variant: page === number ? 'primary' : 'ghost', "aria-current": page === number ? 'page' : undefined, onClick: () => go(number), children: number }, number)))), variant === 'compact' && _jsxs("span", { className: "muted", children: ["Page ", page, " of ", pages] }), _jsx(Button, { variant: "outline", onClick: () => go(page + 1), disabled: page === pages, children: "Next" })] }));
}
