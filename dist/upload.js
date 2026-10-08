'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText } from 'lucide-react';
import React from 'react';
import { cn } from './cn.js';
export function Uploader({ variant = 'standard' }) {
    const [name, setName] = React.useState('');
    const [over, setOver] = React.useState(false);
    function take(file) { setName(file ? file.name : ''); }
    const input = _jsx("input", { type: "file", "aria-label": "Choose a file", onChange: (event) => take(event.target.files?.[0]) });
    if (variant === 'compact') {
        return _jsxs("label", { className: "upload-compact", children: [input, name || 'Choose file'] });
    }
    return (_jsxs("label", { className: cn('upload-area', variant === 'dropzone' && 'is-drop', over && 'is-over'), onDragOver: (event) => { event.preventDefault(); setOver(true); }, onDragLeave: () => setOver(false), onDrop: (event) => { event.preventDefault(); setOver(false); take(event.dataTransfer.files?.[0]); }, children: [_jsx(FileText, { size: 22, "aria-hidden": true }), _jsx("span", { children: name || (variant === 'dropzone' ? 'Drop a file here, or browse' : 'Choose a file') }), input] }));
}
