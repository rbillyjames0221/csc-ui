'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import { ArrowRight, Check, ChevronDown, Loader2 } from 'lucide-react';
import React from 'react';
import { cn } from './cn.js';
export const buttonVariants = cva('csc-button', {
    variants: {
        variant: {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            outline: 'btn-outline',
            ghost: 'btn-ghost',
            soft: 'btn-soft',
            danger: 'btn-danger',
            success: 'btn-success',
            link: 'btn-link',
        },
        size: { xs: 'btn-xs', sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg', xl: 'btn-xl' },
        shape: { rounded: 'shape-rounded', pill: 'shape-pill', square: 'shape-square' },
    },
    defaultVariants: { variant: 'primary', size: 'md', shape: 'rounded' },
});
export function Button({ variant, size, shape, className, loading, icon, iconPosition = 'leading', children, disabled, ...props }) {
    return (_jsxs("button", { className: cn(buttonVariants({ variant, size, shape }), className), disabled: disabled || loading, "aria-busy": loading || undefined, ...props, children: [loading ? _jsx(Loader2, { className: "spin", size: 15, "aria-hidden": true }) : icon && iconPosition === 'leading' ? icon : null, children, !loading && icon && iconPosition === 'trailing' ? icon : null] }));
}
export function IconButton({ label, children, ...props }) {
    return (_jsx(Button, { ...props, "aria-label": label, className: cn('icon-only', props.className), children: children }));
}
export function ButtonGroup({ children }) {
    return (_jsx("div", { role: "group", "aria-label": "Actions", className: "btn-group", children: children }));
}
export function SplitButton({ label = 'Save', onPrimary }) {
    const [open, setOpen] = React.useState(false);
    return (_jsxs("div", { className: "split-button", onBlur: () => setOpen(false), children: [_jsx(Button, { onClick: onPrimary, children: label }), _jsx(Button, { "aria-expanded": open, "aria-haspopup": "menu", "aria-label": "More actions", onClick: () => setOpen((value) => !value), children: _jsx(ChevronDown, { size: 15 }) }), open && (_jsxs("div", { role: "menu", className: "split-menu", children: [_jsx("button", { role: "menuitem", type: "button", children: "Save draft" }), _jsx("button", { role: "menuitem", type: "button", children: "Save and close" })] }))] }));
}
export function ButtonDemo({ variant = 'primary', size = 'md', shape = 'rounded', label = 'Submit application', icon = 'none', state = 'default', }) {
    const glyph = icon === 'arrow' ? _jsx(ArrowRight, { size: 15 }) : icon === 'check' ? _jsx(Check, { size: 15 }) : undefined;
    if (variant === 'icon')
        return _jsx(IconButton, { label: label, size: size, shape: shape, icon: glyph || _jsx(Check, { size: 15 }), children: glyph || _jsx(Check, { size: 15 }) });
    if (variant === 'split')
        return _jsx(SplitButton, { label: label });
    if (variant === 'group') {
        return (_jsxs(ButtonGroup, { children: [_jsx(Button, { size: size, children: "Approve" }), _jsx(Button, { size: size, variant: "outline", children: "Return" }), _jsx(Button, { size: size, variant: "ghost", children: "Archive" })] }));
    }
    const appearance = (['primary', 'secondary', 'outline', 'ghost', 'soft', 'danger', 'success', 'link'].includes(variant) ? variant : 'primary');
    return (_jsx(Button, { variant: appearance, size: size, shape: shape, disabled: state === 'disabled', loading: state === 'loading', icon: glyph, iconPosition: "trailing", children: label }));
}
