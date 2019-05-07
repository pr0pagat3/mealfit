import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, SCREEN_HEIGHT, Platform, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default function NavBar({headerTitle, onPressLeft, onPressRight, iconLeft, iconRight, progress}) {
  return (
    <View style={styles.navContainer}>
      <View style={styles.statusBar}/>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconLeft} onPress={this.onPressLeft}>
          <Icon name="chevron-left" size={25} color="#000" />
        </TouchableOpacity>
        <View><Text style={{color: '#000'}}>{headerTitle}</Text></View>
        <TouchableOpacity style={styles.iconRight} onPress={this.onPressRight}>
          <Icon name="chevron-right" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.bar}>
        <View style={{height: 4, backgroundColor: '#00C871', width: (progress/100 * width)}}/>
        <View style={{height: 4, backgroundColor: '#BDBDBD', opacity: 0.2, width: (width - (progress*100/width)) }}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer: {
    height: HEADER_HEIGHT + 4,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: "#BDBDBD",
  },
});





