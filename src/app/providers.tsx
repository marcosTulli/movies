'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeContext from "@/theme";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeContext>
                {children}
            </ThemeContext>
        </QueryClientProvider>
    );
}
