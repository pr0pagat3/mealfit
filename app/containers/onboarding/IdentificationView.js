import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Picker from 'react-native-picker';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
// import Input from '../../components/Input';
import { Input } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

export default class IdentificationView extends React.Component {
  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Identification" />
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <Text>I am</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={styles.input}>
            <Icon name='gender-female' size={40} color='#00C871'/>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>Female</Text>
            </View>
            </View>
            <View style={styles.input}>
            <Icon name='gender-male' size={40} color='#BDBDBD'/>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>Male</Text>
              </View>
            </View>
          </View>
          <View>
          <Input
            placeholder='INPUT WITH SHAKING EFFECT'
            shake={true}
          />
          {/* <Input placeholder="Birthday" iconName="cake"/>
          <Input placeholder="Location" iconName="map-marker-outline"/> */}
            <Button
              onPress={() => this.props.navigation.navigate('MeasurementView')}
              text="Save"
            />
          </View> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#00C871",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  },
  input: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    width: (width/2 - 30),
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});

