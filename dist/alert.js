import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react';
const icons = { info: Info, success: CheckCircle2, warning: AlertTriangle, error: XCircle, blue: Info, green: CheckCircle2, amber: AlertTriangle, red: XCircle };
const tones = { info: 'blue', success: 'green', warning: 'amber', error: 'red', blue: 'blue', green: 'green', amber: 'amber', red: 'red' };
export function Alert({ tone = 'info', children, title }) {
    const key = tone in icons ? tone : 'info';
    const Icon = icons[key];
    return (_jsxs("div", { role: key === 'error' ? 'alert' : 'status', className: `alert alert-${tones[key]}`, children: [_jsx(Icon, { size: 18, "aria-hidden": true }), _jsxs("span", { children: [title && _jsxs("strong", { children: [title, " "] }), children] })] }));
}
