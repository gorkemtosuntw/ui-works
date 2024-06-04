import * as React from 'react';

import { View } from 'react-native';
import { Title } from 'react-native-ui-works';

const TitleDemo = () => {
  return (
    <View>
      <Title variant="h1">Heading 1</Title>
      <Title variant="h2">Heading 2</Title>
      <Title variant="h3">Heading 3 (Default)</Title>
      <Title variant="h4">Heading 4</Title>
      <Title variant="h5">Heading 5</Title>
      <Title variant="h6">Heading 6</Title>
      <View style={{ backgroundColor: '#000' }}>
        <Title invert>Heading 3 Invert</Title>
      </View>
      <Title variant="h3" color="flamingo">
        Heading 3 Flamingo
      </Title>
      <Title variant="h4" color="jade">
        Heading 3 Custom
      </Title>
    </View>
  );
};

export default TitleDemo;
