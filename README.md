# react-native-ui-works

UI Kit for react-native projects

## Installation

```sh
npm install react-native-ui-works
```

## Usage

```js
import { PressableButton } from 'react-native-ui-works';

const ButtonExample = () => {
  return (
    <View>
      <View style={styles.colors}>
      <PressableButton
        size="small"
        title="Flamingo"
        color="flamingo"
        onPress={() => onPick('flamingo')}
      />
    </View>
  );
};

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
