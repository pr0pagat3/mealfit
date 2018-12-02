import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button, Text, TextInput, Divider } from '@shoutem/ui';
import { RadioButtons } from 'react-native-radio-buttons';
import options from './constants';

class OnboardingStepThreeScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedOption: ''
    }
  }

  render () {
    return(
      <View style={{flex: 1, marginTop: 50, justifyContent: 'space-evenly'}}>
        <View>
          <FormLabel>How active is your current lifestyle?</FormLabel>
          <Divider />

        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <Button onPress={() => this.props.navigation.navigate('Home')} styleName="secondary full-width">
            <Text>Finish! 😄</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default OnboardingStepThreeScreen;
