import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';
import { colors } from '../../constants';

export default function MainGoalView({navigation}) {
  const [ mainGoal, setMainGoal ] = useState('')
  const [ loading, setLoading ] = useState('')
  
  onSelectLose = () => setMainGoal('lose')
  onSelectMaintain = () => setMainGoal('maintain')
  onSelectGain = () => setMainGoal('gain')

  onSave = async () => {
    if (!mainGoal) return

    setLoading(true)

    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      goal: mainGoal
    })
    .then(response => {
      console.log(response)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
    });

    navigation.navigate(mainGoal === 'maintain' ? 'SuccessView': 'WeeklyActivityView')
  }

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Goal" progress={60} />
      <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Text>What is your main goal?</Text>
        </View>

        <View style={{flex: 1}}>
          <SelectBox title="Get Lean or Lose Weight" onPress={this.onSelectLose} isSelected={mainGoal === 'lose'}/>
          <SelectBox title="Get Healthier/Recomposition" onPress={this.onSelectMaintain} isSelected={mainGoal === 'maintain'}/>
          <SelectBox title="Build Muscle or Gain Weight" onPress={this.onSelectGain} isSelected={mainGoal === 'gain'}/>
        </View>

      </View>
      </ScrollView>
      <View style={{backgroundColor: colors.white, padding: 20}}>
        <Button onPress={this.onSave} isLoading={loading} text="Save"/>
      </View>
    </View>
  )
}
