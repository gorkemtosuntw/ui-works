import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeProvider, createTheme } from 'react-native-ui-works';
import ButtonDemo from './components/ButtonDemo';
import ColorPicker from './components/ColorPicker';
import TextDemo from './components/TextDemo';
import TitleDemo from './components/TitleDemo';

const App = () => {
  const [primaryColor, setPrimaryColor] = React.useState('jade');

  const appTheme = createTheme({
    primaryColor,
    colors: {
      jade: [
        '#d2e1d5',
        '#a5c4ac',
        '#97bb9f',
        '#88b192',
        '#7aa785',
        '#6b9e78',
        '#5c8967',
        '#4e7457',
        '#324d39',
        '#253a2a',
      ],
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <ColorPicker onPick={setPrimaryColor} />
            <ButtonDemo />
            <TextDemo />
            <TitleDemo />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
});

export default App;
