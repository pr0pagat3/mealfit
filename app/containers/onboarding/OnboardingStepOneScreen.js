import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Button, Text, TextInput } from '@shoutem/ui'
import Picker from 'react-native-picker';

class OnboardingStepOneScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      weight: ''
    }

    this.pickWeight = this.pickWeight.bind(this);
  }

  pickWeight() {
    let data = [];
    for(var i=0;i<100;i++){
        data.push(i);
    }

    Picker.init({
        pickerData: data,
        selectedValue: [59],
        onPickerConfirm: data => {
            console.log(data);
            this.setState({weight: data})
        },
        onPickerCancel: data => {
            console.log(data);
            // this.setState({weight: data})
        },
        onPickerSelect: data => {
          console.log(data);
            this.setState({weight: data})
        }
    });
    Picker.show();
  }

  render () {
    return(
      <View style={{flex: 1, marginTop: 50, justifyContent: 'space-evenly'}}>
        <View>
          <FormLabel >Current Weight</FormLabel>
          <FormInput onFocus={this.pickWeight} value={this.state.weight} onChangeText={(a) => {}}/>
        </View>
        <View>
          <FormLabel>Target Weight</FormLabel>
          <FormInput onFocus={this.pickWeight} onChangeText={(a) => {}}/>
        </View>
        <View>
          <FormLabel>Progress Per Week</FormLabel>
          <FormInput onFocus={this.pickWeight} onChangeText={(a) => {}}/>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <Button onPress={() => this.props.navigation.navigate('OnboardingStepTwoScreen')} styleName="secondary full-width">
            <Text>Continue</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default OnboardingStepOneScreen;
