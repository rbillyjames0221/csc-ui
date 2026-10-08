import React from 'react';
export declare function ToastProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useToast(): (message: string, tone?: string) => void;
export declare function ToastDemo({ tone, message }: {
    tone?: string;
    message?: string;
}): React.JSX.Element;
