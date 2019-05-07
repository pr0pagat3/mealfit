import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';

export default class WeeklyActivityView extends React.Component {
  constructor() {
    super()

    this.state = {
      weeklyGoal: ''
    }
  }

  // onSelectNotVeryActive = () => this.setState({weeklyGoal: 'not very active'})
  // onSelectLightlyActive = () => this.setState({weeklyGoal: 'lightly active'})
  // onSelectActive = () => this.setState({weeklyGoal: 'active'})
  // onSelectVeryActive = () => this.setState({weeklyGoal: 'very active'})

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Weekly Activity Goal" progress={75} />
        <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>Set your weekly goal!</Text>
          </View>

          <View style={{flex: 1}}>
            <SelectBox title="Lose 0.5 lbs"/>
            <SelectBox title="Lose 1 lbs"/>
            <SelectBox title="Lose 1.5 lbs"/>
            <SelectBox title="Lose 2 lbs"/>
          </View>


        </View>
        </ScrollView>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Button onPress={() => this.props.navigation.navigate('GoalWeightView')} text="Save"/>
        </View>
      </View>
    )
  }
}
