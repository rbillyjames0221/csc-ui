import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from './cn';
export function Badge({ children, tone = 'blue', className }) {
    return _jsx("span", { className: cn('badge', `badge-${tone}`, className), children: children });
}
