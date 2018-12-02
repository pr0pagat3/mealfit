import React from 'react';
import { View, Row, Icon, Text } from '@shoutem/ui';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Stats',
    headerStyle: {
      backgroundColor: '#232b2b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Row styleName="small">
        <Icon name="web" />
        <Text>Aboutasdf</Text>
        <Icon styleName="disclosure" name="right-arrow" />
      </Row>

      </View>
    );
  }
}
