import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { PressableButton, useTheme, type Theme } from 'react-native-ui-works';

type ColorPickerProps = {
  onPick: (color: string) => void;
};

const ColorPicker = ({ onPick }: ColorPickerProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <View style={styles.colors}>
        <View style={styles.column}>
          <PressableButton
            size="small"
            title="Flamingo"
            color="flamingo"
            onPress={() => onPick('flamingo')}
          />
        </View>
        <View style={styles.column}>
          <PressableButton
            size="small"
            title="Wave"
            color="wave"
            onPress={() => onPick('wave')}
          />
        </View>
        <View style={styles.column}>
          <PressableButton
            size="small"
            title="Sapphire"
            color="sapphire"
            onPress={() => onPick('sapphire')}
          />
        </View>
        <View style={styles.column}>
          <PressableButton
            size="small"
            title="Custom"
            color="jade"
            onPress={() => onPick('jade')}
          />
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    colors: {
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 4,
      borderColor: theme.colors[theme.primaryColor]?.[6],
      flexDirection: 'row',
      gap: 12,
      padding: 12,
    },
    column: {
      flex: 1,
    },
  });
};

export default ColorPicker;
