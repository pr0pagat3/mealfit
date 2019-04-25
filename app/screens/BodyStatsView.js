import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class BodyStatsView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/images/statsbackground.png')} style={styles.background}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});