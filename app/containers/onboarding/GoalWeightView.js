import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import PickerDropdown from '../../components/PickerDropdown';
import axios from 'axios';
import { colors } from '../../constants';

export default function GoalWeightView({navigation}) {
  const [ data, setData ] = useState({weightType: '', goalWeight: '145'})
  const [ isContentLoading, setIsContentLoading ] = useState(false)
  const [ isSaveLoading, setIsSaveLoading ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  const [ isPickerCollapsed, setIsPickerCollapsed ] = useState(true)
  const [ url, setUrl ] = useState('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsContentLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsContentLoading(false);
    };

    fetchData();
  }, [url]);
  
  expandGoalWeightPicker = () => setIsPickerCollapsed(!isPickerCollapsed)
  onChangeGoalWeight = (itemValue, itemIndex) => setData({...data, goalWeight: itemValue})

  onSave = async () => {
    setIsSaveLoading(true)
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      goalWeight: data.goalWeight
    })
    .then(response => {
      setIsSaveLoading(false)
    })
    .catch(error => {
      setIsError(true)
      setIsSaveLoading(false)
    });

    return navigation.navigate('SuccessView')
  }

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Goal Weight" progress={90}/>
      <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <PickerDropdown
          title='Your goal weight?'
          onChange={this.onChangeGoalWeight}
          value={data.goalWeight}
          typeValue={data.weightType}
          valueTypes={[data.weightType]}
          isPickerCollapsed={isPickerCollapsed}
          expandHandle={this.expandGoalWeightPicker}
          />
      </View>
      </ScrollView>
      <View style={{backgroundColor: colors.white, padding: 20}}>
        <Button onPress={this.onSave} isLoading={isSaveLoading} text="Save"/>
      </View>
    </View>
  )
}
