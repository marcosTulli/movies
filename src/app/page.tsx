"use client";
import HomePage from "@/components/home/Home";
import ThemeContext from "@/theme";


export default function Home() {
    return (
        <ThemeContext>
            <HomePage />
        </ThemeContext>
    );

}