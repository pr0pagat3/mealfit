import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('window');
import restaurants from '../recipes';
import { Input } from '../components/Input'

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
const images = {
  background: require('../assets/images/homeStats.png'), // Put your own image here
};

export default class PersonalInfoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.navContainer}>
          <View style={styles.statusBar} />
          <View style={styles.navBar}>
              <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
                  <Icon name="arrow-left" size={25} color="#000" />
              </TouchableOpacity>
              <View><Text style={{color: '#000'}}>Personal Info</Text></View>
              <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
                  <Icon name="arrow-right" size={25} color="#fff" />
              </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, padding: 20}}>
          <Input placeholder="Name" />
          <Input placeholder="Birthday" />
          <Input placeholder="Region" />

          <Text>Height</Text>
          <Input />
          <Text>Weight</Text>
          <Input />

          <TouchableOpacity>
            <View style={styles.button}>
              <Text>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  button: {
    height: 40,
    borderColor: '#BDBDBD',
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
    marginHorizontal: 10,
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
    borderBottomColor: '#979797',
    borderBottomWidth: 1
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
    height: 40,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});