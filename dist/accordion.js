'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from './cn.js';
const items = [
    ['What is the CSC Design System?', 'A shared collection of UI components for consistent government applications.'],
    ['Is the sample data real?', 'No. Figures and names in previews are demonstration data only.'],
    ['Which typeface is standard?', 'Aptos at 12 pt is the office standard. The web body size is 16 px.'],
];
export function Accordion({ variant = 'bordered' }) {
    return (_jsx(AccordionPrimitive.Root, { type: "single", collapsible: true, className: cn('acc', `acc-${variant}`), children: items.map(([title, body]) => (_jsxs(AccordionPrimitive.Item, { value: title, className: "acc-item", children: [_jsx(AccordionPrimitive.Header, { children: _jsx(AccordionPrimitive.Trigger, { className: "acc-trigger", children: title }) }), _jsx(AccordionPrimitive.Content, { className: "acc-content", children: body })] }, title))) }));
}
