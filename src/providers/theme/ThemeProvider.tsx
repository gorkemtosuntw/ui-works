import * as React from 'react';

import { DEFAULT_THEME } from './constants';
import { mergeTheme } from './merge-theme';
import type { Theme, ThemeOverride } from './types';

export const ThemeContext = React.createContext<Theme | null>(null);

export const useSafeTheme = () =>
  React.useContext(ThemeContext) || DEFAULT_THEME;

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      'ThemeProvider was not found in component tree, make sure you have it in your app'
    );
  }

  return ctx;
}

export interface ThemeProviderProps {
  /** Theme override object */
  theme?: ThemeOverride;

  /** Your application or part of the application that requires different theme */
  children?: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const mergedTheme = React.useMemo(
    () => mergeTheme(DEFAULT_THEME, theme),
    [theme]
  );

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
