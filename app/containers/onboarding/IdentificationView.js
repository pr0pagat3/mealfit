import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
const { height, width } = Dimensions.get('window');

export default function IdentificationView() {
  const [ value, setValue ] = useState('hello')

  onChangeBirthday = (text) => setValue('hi');
  onChangeLocation = (text) => this.setState({location: text})
  onChangeGender = (gender) => this.setState({gender: gender})

  onSave = () => {
    // axios.put('http://localhost:3000/users/5ccb5e96a7c8fa829ba6de92', {
    //   gender: 'female',
    //   birthday: this.state.birthday,
    //   location: this.state.location
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    this.props.navigation.navigate('MeasurementView')
  }

  // render() {
    console.log(this.state)
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Identification" progress={15}/>
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>{value}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity>
              <View style={styles.input}>
                <Icon name='gender-female' size={40} color='#00C871'/>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>Female</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.input}>
              <Icon name='gender-male' size={40} color='#BDBDBD'/>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>Male</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
         
          <View style={{flex: 1}}>
            <Input placeholder="Birthday" iconName="cake" onChangeText={this.onChangeBirthday}/>
            <Input placeholder="Location" iconName="map-marker-outline" onChangeText={this.onChangeLocation}/>
          </View> 

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={this.onSave} text="Save"/>
          </View>
        </View>
      </View>
    )
  // }
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

