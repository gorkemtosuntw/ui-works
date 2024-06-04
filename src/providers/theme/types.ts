import type { PartialDeep } from 'type-fest';
import type { TextStyle } from 'react-native';

export type DefaultColor = 'flamingo' | 'wave' | 'sapphire' | (string & {});

export type ColorsTuple = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  ...string[],
];

export type ColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface ThemeColorsOverride {}

export type ThemeColors = ThemeColorsOverride extends {
  colors: Record<infer CustomColors, ColorsTuple>;
}
  ? Record<CustomColors, ColorsTuple>
  : Record<DefaultColor, ColorsTuple>;

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSizesValues = Record<Size, number>;
export type FontSize = keyof FontSizesValues;
export type LineHeightValues = Record<Size | (string & {}), number>;
export type LineHeight = keyof LineHeightValues;
export interface HeadingStyle {
  fontSize: number;
  fontWeight?: TextStyle['fontWeight'];
  lineHeight: number;
}

export interface Theme {
  /** White color */
  white: string;

  /** Black color */
  black: string;

  /** Object of colors, key is color name, value is an array of at least 10 strings (colors) */
  colors: ThemeColors;

  /** Index of theme.colors[color].
   *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   *
   *  For example,
   *  { primaryShade: 6 } // shade 6 is used both for color schemes
   * */
  primaryShade: ColorShade;

  /** Key of `theme.colors`, hex/rgb/hsl values are not supported.
   *  Determines which color will be used in all components by default.
   *  Default value – `indigo`.
   * */
  primaryColor: string;

  /** Object of values that are used to control `font-size` property in all components */
  fontSizes: FontSizesValues;

  /** Object of values that are used to control `line-height` property in `Text` component */
  lineHeights: LineHeightValues;

  /** Controls various styles of h1-h6 elements, used in Title components */
  headings: {
    fontWeight?: TextStyle['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };
}

export type ThemeOverride = PartialDeep<Theme>;

export type Color = keyof ThemeColors;
