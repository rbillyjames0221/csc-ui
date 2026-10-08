import React from 'react';
export declare function Input({ label, hint, error, success, required, optional, leading, trailing, appearance, fieldSize, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    hint?: string;
    error?: string;
    success?: string;
    required?: boolean;
    optional?: boolean;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    appearance?: 'outlined' | 'filled' | 'underline';
    fieldSize?: 'sm' | 'md' | 'lg';
}): React.JSX.Element;
export declare function InputDemo({ appearance, size, label, placeholder, hint, state, }: {
    appearance?: 'outlined' | 'filled' | 'underline';
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    placeholder?: string;
    hint?: string;
    state?: string;
}): React.JSX.Element;
export declare function SearchField(props: React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}): React.JSX.Element;
