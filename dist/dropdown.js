'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Menu from '@radix-ui/react-dropdown-menu';
import { Button } from './button';
const sets = {
    actions: [['Edit', 'Duplicate', 'Archive']],
    profile: [['Profile', 'Settings', 'Sign out']],
    grouped: [['New application', 'Import'], ['Archive selected']],
};
export function DropdownMenu({ variant = 'actions' }) {
    const groups = sets[variant] || sets.actions;
    return (_jsxs(Menu.Root, { children: [_jsx(Menu.Trigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: variant === 'profile' ? 'Account' : 'Actions' }) }), _jsx(Menu.Portal, { children: _jsx(Menu.Content, { className: "menu-content", sideOffset: 6, children: groups.map((group, index) => (_jsxs(Menu.Group, { children: [index > 0 && _jsx(Menu.Separator, { className: "menu-sep" }), group.map((item) => _jsx(Menu.Item, { className: "menu-item", children: item }, item))] }, group.join()))) }) })] }));
}
