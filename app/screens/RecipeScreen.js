import React from 'react';
import { View, Text } from 'react-native';

export default class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
    headerStyle: {
      backgroundColor: '#232b2b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Healthy Recipe</Text>

      </View>
    );
  }
}
