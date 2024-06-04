import * as React from 'react';
import { Text as RNText, StyleSheet, type TextStyle } from 'react-native';
import {
  useTheme,
  type Color,
  type Size,
  type Theme,
} from '../../providers/theme';

export type TextProps = {
  fontWeight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  textAlign?: TextStyle['textAlign'];
  textDecoration?: TextStyle['textDecorationLine'];
  textTransform?: TextStyle['textTransform'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  size?: Size;
  color?: Color;
  invert?: boolean;
  children: React.ReactNode;
};

const Text = ({
  children,
  size = 'md',
  color,
  fontStyle = 'normal',
  fontWeight = 'normal',
  textAlign = 'auto',
  textDecoration = 'none',
  textTransform = 'none',
  textDecorationLine = 'none',
  invert = false,
}: TextProps) => {
  const theme = useTheme();
  const styles = createStyles(theme, size);
  const combinedStyles = {
    fontStyle,
    fontWeight,
    textAlign,
    textDecoration,
    textTransform,
    textDecorationLine,
    color: invert
      ? theme.white
      : color
        ? theme.colors[color || theme.primaryColor]?.[theme.primaryShade]
        : theme.black,
  };

  return <RNText style={[styles.text, combinedStyles]}>{children}</RNText>;
};

const createStyles = (theme: Theme, size: Size) => {
  return StyleSheet.create({
    text: {
      fontSize: theme.fontSizes[size],
      lineHeight: theme.lineHeights[size],
    },
  });
};

export default Text;
