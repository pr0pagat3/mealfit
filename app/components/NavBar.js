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
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00C871',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    // marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  boldText: {
    fontWeight: 'bold'
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomColor: "#BDBDBD",
    // borderBottomWidth: 1
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  box: {
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.00,
    elevation: 24,
  },
  macrosText: {
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});




