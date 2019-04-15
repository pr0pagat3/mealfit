import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RecipeFilterModal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent', padding: 40 }}>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={5}
        >
          
        </BlurView>

        <View style={{}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.button}>
              <Icon name="water" size={25} color="lightgrey" />
            </View>
              <View style={styles.button}>
                <Icon name="bullseye-arrow" size={25} color="lightgrey" />
              </View>
              <View style={styles.button}>
                <Icon name="scale-bathroom" size={25} color="lightgrey" />
              </View>
          </View>
            
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.button}>
              <Icon name="food-apple" size={25} color="lightgrey" />
            </View>
            <View style={styles.button}>
              <Icon name="silverware-fork-knife" size={25} color="lightgrey" />
            </View>
          </View>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.closeButton}>
              <Icon name="close" size={25} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  button: {
    margin: 25,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.1,
      shadowRadius: 15.00,
      elevation: 24,
  },
  closeButton: {
    margin: 25,
    width: 50,
    height: 50,
    backgroundColor: '#00C871',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.1,
      shadowRadius: 15.00,
      elevation: 24,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
