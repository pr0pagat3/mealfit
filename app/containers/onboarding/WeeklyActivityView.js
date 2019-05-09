import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';
import { colors } from '../../constants';

export default class WeeklyActivityView extends React.Component {
  state = {
    mainGoal: 'gain',
    weightType: '',
    weeklyGoal: '',
    isLoading: false,
  }
  
  componentDidMount() {
    axios.get('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
    .then(response => {
      console.log(response.data.goal);
      this.setState({
        mainGoal: response.data.goal,
        weightType: response.data.weightType,
        loading: false
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false})
    });
  }

  renderWeeklyGoalSelectBox() {
    const { mainGoal, weeklyGoal, weightType } = this.state;

    const lbsArray = [0.5, 1, 1.5, 2];
    const kgArray = [0.3, 0.5, 0.7, 0.9];
    const mapArray = weightType === 'lbs' ? lbsArray : kgArray;
    
    return mapArray.map((goal, index) =>
      <SelectBox 
        key={index}
        title={`${mainGoal} ${goal} ${weightType}`}
        onPress={() => this.setState({weeklyGoal: goal})}
        isSelected={weeklyGoal === goal} 
      />
    )
  }

  onSave = async () => {
    this.setState({isLoading: true})

    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      weeklyRate: this.state.weeklyGoal
    })
    .then(response => {
      console.log(response);
      this.setState({isLoading: false})
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false})
    });

    return this.props.navigation.navigate('GoalWeightView')
  }

  render () {
    const { isLoading } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar headerTitle="Weekly Activity Goal" progress={75} />
        <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>Set your weekly goal!</Text>
          </View>

          <View style={{flex: 1}}>
            {this.renderWeeklyGoalSelectBox()}
          </View>

        </View>
        </ScrollView>
        <View style={{backgroundColor: colors.white, padding: 20}}>
          <Button onPress={this.onSave} isLoading={isLoading} text="Save"/>
        </View>
      </View>
    )
  }
}
