import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import { colors } from '../../constants';
const { width } = Dimensions.get('window');

const GenderButton = function({gender, onPress, isSelected}) {
  const color = isSelected ? colors.primary : colors.lightgrey;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.selectBox, { borderColor: color }]}>
        <Icon name={`gender-${gender.toLowerCase()}`} size={50} color={color}/>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginHorizontal: 10, color: color, fontWeight: 'bold'}}>{gender}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function IdentificationView({navigation}) {
  const [ birthday, setBirthday ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ loading, setLoading ] = useState(false);

  onChangeDate = date => setBirthday(date);
  onSelectFemale = () => setGender('female')
  onSelectMale = () => setGender('male')

  onSave = async () => {
    setLoading(true)
    
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      gender: gender,
      birthday: birthday,
    })
    .then(response => {
      console.log(response);
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
      setLoading(false)
    });

    navigation.navigate('MeasurementView')
  }

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Identification" progress={15}/>
      <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Text>I am</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <GenderButton gender="Female" isSelected={gender === 'female'} onPress={this.onSelectFemale}/>
          <GenderButton gender="Male" isSelected={gender === 'male'} onPress={this.onSelectMale} />
        </View>
        
        <View style={{flex: 1, marginVertical: 40}}>
          <DatePicker
            style={{width: width - 40}}
            date={birthday}
            mode="date"
            placeholder="Birthday"
            format="YYYY-MM-DD"
            minDate="1900-05-01"
            maxDate="2030-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: styles.input
              // ... You can check the source to find the other keys.
            }}
            onDateChange={this.onChangeDate}
          />
        </View> 
      </View>
      </ScrollView>
      <View style={{backgroundColor: colors.white, padding: 20}}>
        <Button onPress={this.onSave} isLoading={loading} text="Save"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    width: (width/2 - 30),
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  },
  input: {
    flex: 1,
    height: 40,
    alignItems: 'flex-start',
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});

