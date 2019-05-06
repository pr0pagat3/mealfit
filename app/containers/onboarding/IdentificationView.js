import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
const { width } = Dimensions.get('window');

const GenderButton = function({gender, onPress, isSelected}) {
  const color = isSelected ? '#00C871' : '#BDBDBD';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.selectBox, { borderColor: color }]}>
        <Icon name={`gender-${gender}`} size={40} color={color}/>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginHorizontal: 10, color: color, fontWeight: 'bold'}}>{gender}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default class IdentificationView extends React.Component {
  state = {
    birthday: '',
    gender: '',
  }

  onChangeBirthday = text => this.setState({birthday: text})
  onSelectFemale = () => this.setState({gender: 'female'})
  onSelectMale = () => this.setState({gender: 'male'})
  onChangeDate = date => this.setState({birthday: date})

  onSave = () => {
    axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      gender: this.state.gender,
      birthday: this.state.birthday,
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

    this.props.navigation.navigate('MeasurementView')
  }

  render() {
    const { gender, birthday } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar headerTitle="Identification" progress={15}/>
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>I am</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <GenderButton gender="female" isSelected={gender === 'female'} onPress={this.onSelectFemale}/>
            <GenderButton gender="male" isSelected={gender === 'male'} onPress={this.onSelectMale} />
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
          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={this.onSave} text="Save"/>
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
  selectBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    width: (width/2 - 30),
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  },
  input: {
    flex: 1,
    height: 40,
    alignItems: 'flex-start',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});

