import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export enum Theme {
    dark = 'dark',
    light = 'light',
}

interface ILanguageContext {
    theme: Theme;
    setTheme: (newTheme: Theme) => void;
    toggleTheme: () => void;
    isChecked: boolean;
}

const defaultContext = {
    theme: Theme.dark,
    setTheme: (newTheme: Theme) => { },
    toggleTheme: () => { console.log("Changed Theme"); },
    isChecked: false
};

export const LanguageContext = React.createContext<ILanguageContext>(defaultContext);

export interface IThemeProviderProps {
    children: React.ReactNode;
}

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },

});


const ThemeContext: React.FC<IThemeProviderProps> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeContext;
