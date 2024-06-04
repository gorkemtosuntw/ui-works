// const DEFAULT_FONT_FAMILY =
//   '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji';

import type { Theme, ThemeColors } from './types';

export const DEFAULT_COLORS: ThemeColors = {
  flamingo: [
    '#ffd2d6',
    '#fea4ae',
    '#fc94a0',
    '#f98493',
    '#f67387',
    '#f2617a',
    '#d25369',
    '#b44659',
    '#963949',
    '#5e212b',
  ],
  wave: [
    '#b2c1c7',
    '#688692',
    '#517381',
    '#396070',
    '#214e5f',
    '#003d4f',
    '#003444',
    '#002b38',
    '#00222e',
    '#001a23',
  ],
  sapphire: [
    '#dcecee',
    '#95c6cd',
    '#83bdc5',
    '#71b4bd',
    '#5daab5',
    '#47a1ad',
    '#3d8b96',
    '#32767f',
    '#28626a',
    '#163c41',
  ],
};

export const DEFAULT_THEME: Theme = {
  white: '#fff',
  black: '#000',
  colors: DEFAULT_COLORS,
  primaryShade: 6,
  primaryColor: 'flamingo',

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },

  lineHeights: {
    xs: 16.8,
    sm: 20.3,
    md: 24.8,
    lg: 28.8,
    xl: 33,
  },

  headings: {
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 44.2 },
      h2: { fontSize: 26, lineHeight: 35.1 },
      h3: { fontSize: 22, lineHeight: 30.8 },
      h4: { fontSize: 18, lineHeight: 26.1 },
      h5: { fontSize: 16, lineHeight: 24 },
      h6: { fontSize: 14, lineHeight: 24 },
    },
  },
};
