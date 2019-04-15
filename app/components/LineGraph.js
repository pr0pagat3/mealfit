import React from 'react';
import { View, Text } from 'react-native';

export default class LineGraph extends React.Component {
  render() {
    return (
      <View style={{}}>
        <View style={{justifyContent: 'flex-start', borderWidth: 2, borderColor: '#fff', width: 30}}/>

        <View style={{borderWidth: 2, borderColor: '#feb551', width: 70}}/>
      </View>
    );
  }


}
