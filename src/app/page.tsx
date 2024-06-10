"use client";
import HomePage from "@/components/home/Home";
import ThemeContext from "@/theme";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeContext>
                <HomePage />
            </ThemeContext>
        </QueryClientProvider>
    );

}