import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import PickerDropdown from '../../components/PickerDropdown';
import axios from 'axios';
import { colors } from '../../constants';

export default class MeasurementView extends React.Component {
  state = {
    weight: '120',
    weightType: 'lbs',
    heightType: 'cm',
    height: '165',
    isWeightPickerCollapsed: true,
    isHeightPickerCollapsed: true,
    isLoading: false,
  }

  expandWeightPicker = () => this.setState({isWeightPickerCollapsed: !this.state.isWeightPickerCollapsed})
  expandHeightPicker = () => this.setState({isHeightPickerCollapsed: !this.state.isHeightPickerCollapsed})
  onChangeWeightValue = (itemValue, itemIndex) => this.setState({weight: itemValue})
  onChangeHeightValue = (itemValue, itemIndex) => this.setState({height: itemValue})
  onChangeWeightType = (itemValue, itemIndex) => this.setState({weightType: itemValue})
  // onChangeHeightType = (itemValue, itemIndex) => this.setState({heightType: itemValue})

  onSave = async() => {
    this.setState({isLoading: true});
    
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      weight: this.state.weight,
      height: this.state.height,
      weightType: this.state.weightType,
      heightType: this.state.heightType,
    })
    .then(response => {
      console.log(response);
      this.setState({isLoading: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false});
    });

    this.props.navigation.navigate('ActivityLevelView')
  }

  render () {
    const { weight, height, weightType, heightType, isLoading } = this.state
    console.log(this.state);

    return(
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
            isPickerCollapsed={this.state.isWeightPickerCollapsed}
            expandHandle={this.expandWeightPicker}
          />
          <PickerDropdown
            title='What is your height?'
            onChange={this.onChangeHeightValue}
            // onChangeType={this.onChangeHeightType}
            value={height}
            typeValue={heightType}
            valueTypes={['cm']}
            isPickerCollapsed={this.state.isHeightPickerCollapsed}
            expandHandle={this.expandHeightPicker}
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