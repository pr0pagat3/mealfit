import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';

class MainGoalView extends React.Component {
  state = {
    mainGoal: '',
    isLoading: false,
  }
  
  onSelectLose = () => this.setState({mainGoal: 'lose'})
  onSelectMaintain = () => this.setState({mainGoal: 'maintain'})
  onSelectGain = () => this.setState({mainGoal: 'gain'})

  onSave = async () => {
    const { mainGoal } = this.state
    if (!mainGoal) return;

    this.setState({isLoading: true});

    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      goal: mainGoal
    })
    .then(response => {
      console.log(response);
      this.setState({isLoading: false})
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false})
    });

    this.props.navigation.navigate(mainGoal === 'maintain' ? 'SuccessView': 'WeeklyActivityView')
  }

  render () {
    const { mainGoal, isLoading } = this.state;

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
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Button onPress={this.onSave} isLoading={isLoading} text="Save"/>
        </View>
      </View>
    )
  }
}

export default MainGoalView;
