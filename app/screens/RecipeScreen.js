import React from 'react';
import { View, Text } from 'react-native';

export default class RecipeScreen extends React.Component {
  static navigationOptions = {
    header: { visible: false },
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Healthy Recipe</Text>

      </View>
    );
  }
}
