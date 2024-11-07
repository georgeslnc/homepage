'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

type ThemeContextType = {
  theme: 'dark' | 'light';
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
};
type ThemeContextProviderProps = {
  children: ReactNode;
};
const initialTheme: ThemeContextType = {
  theme: 'dark',
  setTheme: () => {},
};
const ThemeContext = createContext(initialTheme);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  return (
    <ThemeContext.Provider
      value={useMemo(() => {
        return {
          theme,
          setTheme,
        };
      }, [theme, setTheme])}
    >
      {children}
    </ThemeContext.Provider>
  );
};
