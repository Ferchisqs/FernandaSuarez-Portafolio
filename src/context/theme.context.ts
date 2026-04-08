import { createContext } from 'react';

export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
