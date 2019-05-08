import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';
import { colors } from '../../constants';
// import console = require('console');

export default class WeeklyActivityView extends React.Component {
  constructor() {
    super()

    this.state = {
      mainGoal: 'Gain',
      weightType: '',
      weeklyGoal: '',
      loading: true,
    }
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
    const { mainGoal, weeklyGoal } = this.state;

    const lbsArray = [0.5, 1, 1.5, 2];
    const kgArray = [0.3, 0.5, 0.7, 0.9];
    
    return lbsArray.map((goal, index) =>
      <SelectBox 
        key={index}
        title={`${mainGoal} ${goal} lbs`}
        onPress={() => this.setState({weeklyGoal: goal})}
        isSelected={weeklyGoal === goal} 
      />
    )
  }

  render () {
    const { loading } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar headerTitle="Weekly Activity Goal" progress={75} />
        <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>Set your weekly goal!</Text>
          </View>

          <View style={{flex: 1}}>
            {loading ? <ActivityIndicator size="large" color={colors.primary} /> : this.renderWeeklyGoalSelectBox() }
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
