import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { colors } from '../../constants';

function ActivityLevelSelect({title, subTitle, onPress, isSelected}) {
  const color = isSelected ? colors.primary : null;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.selectBox, { borderColor: isSelected ? colors.primary : colors.lightgrey }]}>
        <Text style={[styles.title, { color: color }]}>{title}</Text>
        <Text style={[styles.subTitle, { color: color }]}>{subTitle}</Text>
        {isSelected ? <Icon name='check-outline' color={colors.primary} style={{position: 'absolute', right: 5, top: 5}}/> : null}
      </View>
    </TouchableOpacity>
  )
}

export default function ActivityLevelView({navigation}) {
  const [ activityLevel, setActivityLevel ] = useState('')
  const [ loading, setLoading ] = useState(false)

  onSelectNotVeryActive = () => setActivityLevel('not very active')
  onSelectLightlyActive = () => setActivityLevel('lightly active')
  onSelectActive = () => setActivityLevel('active')
  onSelectVeryActive = () => setActivityLevel('very active')
  onSelectExtremelyActive = () => setActivityLevel('extremely active')

  onSave = async () => {
    if (!activityLevel) return
    setLoading(true)
    
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      activityLevel: activityLevel,
    })
    .then(response => {
      console.log(response);
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
      setLoading(false)
    });

    navigation.navigate('MainGoalView')
  }

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Activity Level" progress={45}/>
      <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>How active are you?</Text>
          </View>
          <ActivityLevelSelect title="Not Very Active" subTitle="little or no exercise" onPress={this.onSelectNotVeryActive} isSelected={activityLevel === "not very active"}/>
          <ActivityLevelSelect title="Lightly Active" subTitle="light exercise/sports 1-3 days/week" onPress={this.onSelectLightlyActive} isSelected={activityLevel === "lightly active"}/>
          <ActivityLevelSelect title="Active" subTitle="moderate exercise/sports 3-5 days/week" onPress={this.onSelectActive} isSelected={activityLevel === "active"}/>
          <ActivityLevelSelect title="Very Active" subTitle="hard exercise/sports 6-7 days/week" onPress={this.onSelectVeryActive} isSelected={activityLevel === "very active"}/>
          <ActivityLevelSelect title="Extremely Active" subTitle="very hard exercise/sports and physical job" onPress={this.onSelectExtremelyActive} isSelected={activityLevel === "extremely active"}/>
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
    height: 80,
    justifyContent: 'center',
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 20
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 10,
  },
});
