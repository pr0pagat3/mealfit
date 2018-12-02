import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button, Text, TextInput, Divider } from '@shoutem/ui';
import { RadioButtons } from 'react-native-radio-buttons';
import options from './constants';

class OnboardingStepTwoScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedOption: ''
    }
  }

  render () {
    // const options = [
    //     "Sedentary",
    //     "Lightly Active",
    //     "Active",
    //     "Very Active",
    //     "Extremely Active",
    //   ];

      function setSelectedOption(selectedOption){
        this.setState({
          selectedOption
        });
      }

      function renderOption(option, selected, onSelect, index){
        const style = selected ? { fontWeight: 'bold'} : {};

        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <View style={{borderBottomWidth: 1, borderColor: 'black'}}>
              <Text style={style}>{option.text}</Text>
              <Text style={style}>{option.subText}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }

      function renderContainer(optionNodes){
        return <View style={{borderTopWidth: 1}}>{optionNodes}</View>;
      }

    return(
      <View style={{flex: 1, marginTop: 50, justifyContent: 'space-evenly'}}>
        <View>
          <FormLabel>How active is your current lifestyle?</FormLabel>
          <Divider />
          <RadioButtons
            options={ options }
            onSelection={ setSelectedOption.bind(this) }
            selectedOption={this.state.selectedOption }
            renderOption={ renderOption }
            renderContainer={ renderContainer }
          />
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <Button onPress={() => this.props.navigation.navigate('OnboardingStepThreeScreen')} styleName="secondary full-width">
            <Text>Continue</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default OnboardingStepTwoScreen;
