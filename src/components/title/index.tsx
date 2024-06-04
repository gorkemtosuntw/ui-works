import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme, type Color, type Theme } from '../../providers/theme';

export type VariantOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type Variant = `h${VariantOrder}`;

export type TitleProps = {
  color?: Color;
  variant?: Variant;
  invert?: boolean;
  children: React.ReactNode;
};

const Title = ({
  children,
  color,
  variant = 'h3',
  invert = false,
}: TitleProps) => {
  const theme = useTheme();
  const styles = createStyles(theme, variant);
  const combinedStyles = {
    color: invert
      ? theme.white
      : color
        ? theme.colors[color || theme.primaryColor]?.[theme.primaryShade]
        : theme.black,
  };

  return <Text style={[styles.text, combinedStyles]}>{children}</Text>;
};

const createStyles = (theme: Theme, variant: Variant) => {
  return StyleSheet.create({
    text: {
      fontSize: theme.headings.sizes[variant].fontSize,
      lineHeight: theme.headings.sizes[variant].lineHeight,
      fontWeight:
        theme.headings.sizes[variant].fontWeight || theme.headings.fontWeight,
    },
  });
};

export default Title;
