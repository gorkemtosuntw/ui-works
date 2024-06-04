import { deepMerge } from './utils';
import type { Theme, ThemeOverride } from './types';

export const INVALID_PRIMARY_COLOR_ERROR =
  'ThemeProvider: Invalid theme.primaryColor, it accepts only key of theme.colors';

export const INVALID_PRIMARY_SHADE_ERROR =
  'ThemeProvider: Invalid theme.primaryShade, it accepts only 0-9 integers';

function isValidPrimaryShade(shade: number) {
  if (shade < 0 || shade > 9) {
    return false;
  }

  return parseInt(shade.toString(), 10) === shade;
}

export function validateTheme(theme: Theme): asserts theme is Theme {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }

  if (
    typeof theme.primaryShade === 'number' &&
    !isValidPrimaryShade(theme.primaryShade)
  ) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}

export function mergeTheme(currentTheme: Theme, themeOverride?: ThemeOverride) {
  if (!themeOverride) {
    validateTheme(currentTheme);
    return currentTheme;
  }

  const result = deepMerge(currentTheme, themeOverride);

  //   if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
  //     result.headings.fontFamily = themeOverride.fontFamily;
  //   }

  validateTheme(result);
  return result;
}
