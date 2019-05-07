import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Picker, Dimensions, ScrollView } from 'react-native';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
const { width } = Dimensions.get('window');
import PickerDropdown from '../../components/PickerDropdown';

export default class MeasurementView extends React.Component {
  state = {
    weight: '120',
    weightMetric: 'lbs',
    height: false,
    isWeightPickerCollapsed: true,
    isHeightPickerCollapsed: true,
  }

  expandWeightPicker = () => this.setState({isWeightPickerCollapsed: !this.state.isWeightPickerCollapsed})
  expandHeightPicker = () => this.setState({isHeightPickerCollapsed: !this.state.isHeightPickerCollapsed})

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Measurement" progress={30}/>
        <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <PickerDropdown
            title='How much do you weigh?'
            defaultValue={145}
            valueTypes={['LBS', 'KG']}
            isPickerCollapsed={this.state.isWeightPickerCollapsed}
            expandHandle={this.expandWeightPicker}
          />
          <PickerDropdown
            title='What is your height?'
            defaultValue={145}
            valueTypes={['CM']}
            isPickerCollapsed={this.state.isHeightPickerCollapsed}
            expandHandle={this.expandHeightPicker}
          />
        </View>
        </ScrollView>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Button onPress={() => this.props.navigation.navigate('ActivityLevelView')} text="Save"/>
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
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
})