import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { PressableButton, Text, useTheme } from 'react-native-ui-works';

const SaveButton = () => {
  const theme = useTheme();

  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text>Filled</Text>
        <PressableButton
          variant="filled"
          title="Small"
          size="small"
          onPress={() => {
            console.log(theme);
          }}
        />
        <PressableButton
          variant="filled"
          title="Medium"
          size="medium"
          onPress={() => {
            console.log(theme);
          }}
        />
        <PressableButton
          variant="filled"
          title="Large"
          size="large"
          onPress={() => {
            console.log(theme);
          }}
        />
      </View>
      <View style={styles.column}>
        <Text>Light</Text>
        <PressableButton
          variant="light"
          title="Small"
          size="small"
          onPress={() => {
            console.log(theme);
          }}
        />
        <PressableButton
          variant="light"
          title="Medium"
          size="medium"
          onPress={() => {
            console.log(theme);
          }}
        />
        <PressableButton
          variant="light"
          title="Large"
          size="large"
          onPress={() => {
            console.log(theme);
          }}
        />
      </View>
      <View style={styles.column}>
        <Text>Outline</Text>
        <PressableButton
          variant="outline"
          title="Small"
          size="small"
          onPress={() => {
            console.log(theme);
          }}
        />
        <PressableButton
          variant="outline"
          title="Medium"
          size="medium"
          onPress={() => {
            console.log(theme);
          }}
        />
        <PressableButton
          variant="outline"
          title="Large"
          size="large"
          onPress={() => {
            console.log(theme);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    gap: 12,
    flexDirection: 'row',
  },
  column: {
    gap: 12,
    flexDirection: 'column',
    flex: 1,
  },
});

export default SaveButton;
