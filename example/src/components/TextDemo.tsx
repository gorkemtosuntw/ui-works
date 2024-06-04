import * as React from 'react';

import { View } from 'react-native';
import { Text } from 'react-native-ui-works';

const TextDemo = () => {
  return (
    <View>
      <Text size="xl">Extra Large</Text>
      <Text size="lg">Large</Text>
      <Text size="md">Default</Text>
      <Text size="sm">Small</Text>
      <Text size="xs">Extra Small</Text>
      <Text fontWeight={'700'}>Bold</Text>
      <Text fontWeight={'500'}>Semi Bold</Text>
      <Text textDecoration="line-through">Line Through</Text>
      <Text textDecoration="underline">Underline</Text>
      <Text textDecorationLine="line-through">Line Through (IOS)</Text>
      <Text textDecorationLine="underline">Underline (IOS)</Text>
      <Text fontStyle="italic">Italic</Text>
      <Text textTransform="uppercase">uppercase</Text>
      <Text color="wave">Wave color</Text>
      <Text color="flamingo">Flamingo color</Text>
      <Text color="jade">Custom color</Text>
      <View style={{ backgroundColor: '#000' }}>
        <Text invert>Invert color</Text>
      </View>
      <Text textAlign="center">Center aligned</Text>
      <Text textAlign="right">Right aligned</Text>
    </View>
  );
};

export default TextDemo;
