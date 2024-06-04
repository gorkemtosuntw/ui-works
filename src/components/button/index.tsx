import React from 'react';
import { Text, Pressable, Animated, StyleSheet } from 'react-native';
import { useTheme, type Color, type Theme } from '../../providers/theme';
import { getAccessibleTextColor } from '../../providers/theme/utils';

type Variant = 'filled' | 'light' | 'outline';
type Size = 'large' | 'medium' | 'small';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: Color;
  variant?: Variant;
  size?: Size;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color,
  variant = 'filled',
  size = 'medium',
}) => {
  const animated = new Animated.Value(1);
  const theme = useTheme();

  const styles = createStyles(
    theme,
    color || theme.primaryColor,
    variant,
    size
  );

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.6,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={onPress} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View style={[{ opacity: animated }, styles.button]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const createStyles = (
  theme: Theme,
  color: Color,
  variant: Variant,
  size: Size
) => {
  let backgroundColor = theme.colors[color]![theme.primaryShade];
  let textColor;
  let borderColor;

  if (variant === 'filled') {
    textColor = getAccessibleTextColor(backgroundColor);
  }

  if (variant === 'outline') {
    backgroundColor = 'transparent';
    textColor = theme.colors[color]![theme.primaryShade];
    borderColor = theme.colors[color]![theme.primaryShade];
  } else if (variant === 'light') {
    backgroundColor = theme.colors[color]![0];
    textColor = theme.colors[color]![8];
  }

  const sizeStyles = {
    large: {
      height: 50,
      paddingHorizontal: 32,
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 700 as const,
    },
    medium: {
      height: 42,
      paddingHorizontal: 32,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 600 as const,
    },
    small: {
      height: 36,
      paddingHorizontal: 16,
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 600 as const,
    },
  }[size];

  return StyleSheet.create({
    button: {
      backgroundColor,
      borderColor,
      borderWidth: variant === 'outline' ? 2 : 0,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      height: sizeStyles.height,
      paddingHorizontal: sizeStyles.paddingHorizontal,
      userSelect: 'none',
      textAlign: 'center',
      overflow: 'hidden',
      width: 'auto',
    },
    text: {
      color: textColor,
      fontWeight: sizeStyles.fontWeight,
      fontSize: sizeStyles.fontSize,
      lineHeight: sizeStyles.lineHeight,
    },
  });
};

export default Button;
