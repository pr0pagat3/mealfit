import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Button, Text, TextInput } from '@shoutem/ui'
import Picker from 'react-native-picker';
import NavBar from '../../components/NavBar';

class OnboardingStepOneScreen extends React.Component {
  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Identification" />
        <View style={{marginTop: 100, flexDirection: 'row', marginHorizontal: 20, justifyContent: 'flex-end', alignSelf: 'flex-end'}}>
          <Button onPress={() => this.props.navigation.navigate('OnboardingStepTwoScreen')} styleName="secondary full-width">
            <Text>Continue</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default OnboardingStepOneScreen;

