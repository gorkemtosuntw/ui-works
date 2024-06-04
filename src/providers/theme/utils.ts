/* eslint-disable no-bitwise */
// Helper function to calculate the relative luminance of a color
const getLuminance = (color: string): number => {
  const rgb = parseColor(color).map((channel) => {
    channel /= 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0]! + 0.7152 * rgb[1]! + 0.0722 * rgb[2]!;
};

// Helper function to parse a hex color code
const parseColor = (hex: string): number[] => {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

// Helper function to calculate the contrast ratio between two colors
const getContrastRatio = (color1: string, color2: string): number => {
  const lum1 = getLuminance(color1) + 0.05;
  const lum2 = getLuminance(color2) + 0.05;
  return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1;
};

// Function to get an accessible text color based on the background color
export const getAccessibleTextColor = (backgroundColor: string): string => {
  const white = '#FFFFFF';
  const black = '#000000';
  const whiteContrast = getContrastRatio(backgroundColor, white);
  return whiteContrast >= 3.5 ? white : black;
};

function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge<T extends object>(target: T, source: any): T {
  const result: Record<string, any> = { ...target };
  const _source: Record<string, any> = source;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }

  return result as T;
}
