import { createContext } from 'react';

export type ThemeContextType = {
  theme: string | null,
  setTheme: React.Dispatch<React.SetStateAction<string | null>>
};

const iThemeContextState = {
  theme: null,
  setTheme: () => {},
};

const ThemingContext = createContext<ThemeContextType>(iThemeContextState);

export default ThemingContext;
