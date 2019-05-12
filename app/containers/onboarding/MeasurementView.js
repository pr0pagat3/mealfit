import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import PickerDropdown from '../../components/PickerDropdown';
import axios from 'axios';
import { colors } from '../../constants';

export default function MeasurementView({navigation}) {
  const [ weight, setWeight ] = useState('120')
  const [ height, setHeight ] = useState('165')
  const [ weightType, setWeightType ] = useState('lbs')
  const [ heightType, setHeightType ] = useState('cm')
  const [ isWeightPickerCollapsed, setIsWeightPickerCollapsed ] = useState(true)
  const [ isHeightPickerCollapsed, setIsHeightPickerCollapsed ] = useState(true)
  const [ loading, setLoading ] = useState(false)

  expandWeightPicker = () => setIsWeightPickerCollapsed(!isWeightPickerCollapsed) 
  expandHeightPicker = () => setIsHeightPickerCollapsed(!isHeightPickerCollapsed)
  onChangeWeightValue = (itemValue, itemIndex) => setWeight(itemValue)
  onChangeHeightValue = (itemValue, itemIndex) => setHeight(itemValue)
  onChangeWeightType = (itemValue, itemIndex) => setWeightType(itemValue)
  // onChangeHeightType = (itemValue, itemIndex) => this.setState({heightType: itemValue})

  onSave = async() => {
    setLoading(true)
    
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      weight: weight,
      height: height,
      weightType: weightType,
      heightType: heightType,
    })
    .then(response => {
      console.log(response);
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
      setLoading(false)
    });

    navigation.navigate('ActivityLevelView')
  }

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Measurement" progress={30}/>
      <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <PickerDropdown
          title='How much do you weigh?'
          onChange={this.onChangeWeightValue}
          onChangeType={this.onChangeWeightType}
          value={weight}
          typeValue={weightType}
          valueTypes={['lbs', 'kg']}
          isPickerCollapsed={isWeightPickerCollapsed}
          expandHandle={this.expandWeightPicker}
        />
        <PickerDropdown
          title='What is your height?'
          onChange={this.onChangeHeightValue}
          // onChangeType={this.onChangeHeightType}
          value={height}
          typeValue={heightType}
          valueTypes={['cm']}
          isPickerCollapsed={isHeightPickerCollapsed}
          expandHandle={this.expandHeightPicker}
        />
      </View>
      </ScrollView>
      <View style={{backgroundColor: colors.white, padding: 20}}>
        <Button onPress={this.onSave} isLoading={loading} text="Save"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
})