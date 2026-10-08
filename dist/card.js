import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './cn';
export function Card({ children, className, variant = 'default' }) {
    return _jsx("div", { className: cn('csc-card', `card-${variant}`, className), children: children });
}
export function StatCard({ title = 'Applications', value = '2,840', variant = 'statistic' }) {
    return (_jsxs(Card, { variant: variant, className: "metric", children: [_jsx("small", { children: title }), _jsx("strong", { children: value }), _jsx("span", { children: "Sample figure" })] }));
}
