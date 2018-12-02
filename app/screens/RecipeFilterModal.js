import React from 'react';
import { View, Text, Button } from 'react-native';

export default class RecipeFilterModal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        ><Text style={{ fontSize: 30 }}>Go Back!</Text></Button>
      </View>
    );
  }
}
