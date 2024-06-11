'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeContext from "@/theme";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store/store';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
                <ThemeContext>
                    {children}
                </ThemeContext>
            </ReduxProvider>
        </QueryClientProvider>
    );
}
