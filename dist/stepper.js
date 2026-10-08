'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from './cn';
const steps = ['Details', 'Requirements', 'Review', 'Submit'];
export function Stepper({ variant = 'horizontal', current = '2' }) {
    const index = Number(current) - 1;
    return (_jsx("ol", { className: cn('stepper', `stepper-${variant}`), "aria-label": "Progress", children: steps.map((step, stepIndex) => (_jsxs("li", { className: cn(stepIndex < index && 'is-done', stepIndex === index && 'is-current'), "aria-current": stepIndex === index ? 'step' : undefined, children: [_jsx("b", { children: stepIndex + 1 }), _jsx("span", { children: step })] }, step))) }));
}
