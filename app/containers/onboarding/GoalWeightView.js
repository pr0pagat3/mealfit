import React from 'react';
import { View, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import PickerDropdown from '../../components/PickerDropdown';
import axios from 'axios';
import { colors } from '../../constants';

export default class GoalWeightView extends React.Component {
  state = {
    isPickerCollapsed: true,
    goalWeight: '145',
    weightType: '',
    isLoading: false
  }

  componentDidMount() {
    axios.get('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
      .then(response => {
        this.setState({
          weightType: response.data.weightType,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  expandGoalWeightPicker = () => this.setState({isPickerCollapsed: !this.state.isPickerCollapsed})
  onChangeGoalWeight = (itemValue, itemIndex) => this.setState({goalWeight: itemValue})

  onSave = async () => {
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      goalWeight: this.state.goalWeight
    })
    .then(response => {
      console.log(response);
      this.setState({isLoading: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false});
    });

    return this.props.navigation.navigate('SuccessView')
  }

  render () {
    const { weightType, goalWeight, isPickerCollapsed, isLoading } = this.state;

    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Goal Weight" progress={90}/>
        <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <PickerDropdown
            title='Your goal weight?'
            onChange={this.onChangeGoalWeight}
            value={goalWeight}
            typeValue={weightType}
            valueTypes={[weightType]}
            isPickerCollapsed={isPickerCollapsed}
            expandHandle={this.expandGoalWeightPicker}
            />
        </View>
        </ScrollView>
        <View style={{backgroundColor: colors.white, padding: 20}}>
          <Button onPress={this.onSave} isLoading={isLoading} text="Save"/>
        </View>
      </View>
    )
  }
}
