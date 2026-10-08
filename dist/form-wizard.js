'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Alert } from './alert.js';
import { Button } from './button.js';
import { Input } from './input.js';
import { Stepper } from './stepper.js';
const schema = z.object({
    name: z.string().min(2, 'Enter at least 2 characters.'),
    email: z.string().email('Enter a valid email address.'),
    office: z.string().min(2, 'Enter an office.'),
});
export function ApplicationWizard() {
    const [step, setStep] = React.useState(1);
    const [done, setDone] = React.useState(false);
    const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: '', email: '', office: '' } });
    const values = form.watch();
    async function next() {
        const valid = await form.trigger(step === 1 ? ['name', 'email'] : ['office']);
        if (valid)
            setStep((current) => Math.min(3, current + 1));
    }
    return (_jsxs("form", { className: "wizard", onSubmit: form.handleSubmit(() => setDone(true)), noValidate: true, children: [_jsx(Stepper, { variant: "horizontal", current: String(step) }), step === 1 && (_jsxs("div", { className: "wizard-grid", children: [_jsx(Input, { label: "Full name", required: true, error: form.formState.errors.name?.message, ...form.register('name') }), _jsx(Input, { label: "Email address", type: "email", required: true, error: form.formState.errors.email?.message, ...form.register('email') })] })), step === 2 && _jsx(Input, { label: "Office", required: true, error: form.formState.errors.office?.message, ...form.register('office') }), step === 3 && (_jsxs("div", { className: "csc-card", children: [_jsx("p", { children: _jsx("strong", { children: "Review sample application" }) }), _jsxs("p", { children: [values.name || '—', " \u00B7 ", values.email || '—', " \u00B7 ", values.office || '—'] }), _jsx(Alert, { tone: "info", children: "Nothing is submitted to a CSC system. This preview stays in the browser." }), done && _jsx(Alert, { tone: "success", children: "Sample application marked complete." })] })), _jsxs("div", { className: "wizard-actions", children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => setStep((current) => Math.max(1, current - 1)), disabled: step === 1, children: "Back" }), step < 3 ? _jsx(Button, { type: "button", onClick: next, children: "Continue" }) : _jsx(Button, { type: "submit", children: "Submit sample" })] })] }));
}
