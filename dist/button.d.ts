import { type VariantProps } from 'class-variance-authority';
import React from 'react';
export declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "soft" | "danger" | "success" | "link" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    shape?: "rounded" | "pill" | "square" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'leading' | 'trailing';
};
export declare function Button({ variant, size, shape, className, loading, icon, iconPosition, children, disabled, ...props }: ButtonProps): React.JSX.Element;
export declare function IconButton({ label, children, ...props }: ButtonProps & {
    label: string;
}): React.JSX.Element;
export declare function ButtonGroup({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function SplitButton({ label, onPrimary }: {
    label?: string;
    onPrimary?: () => void;
}): React.JSX.Element;
export declare function ButtonDemo({ variant, size, shape, label, icon, state, }: {
    variant?: string;
    size?: string;
    shape?: string;
    label?: string;
    icon?: string;
    state?: string;
}): React.JSX.Element;
