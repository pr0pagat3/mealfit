import React from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button, Text, TextInput, Divider } from '@shoutem/ui';
import { RadioButtons } from 'react-native-radio-buttons';
import options from './constants';
import NavBar from '../../components/NavBar';

class ActivityLevelView extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedOption: ''
    }
  }

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Identification" />

        <View style={{flexDirection: 'row', marginTop: 100, marginHorizontal: 20}}>
          <Button onPress={() => this.props.navigation.navigate('Home')} styleName="secondary full-width">
            <Text>Finish! 😄</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default ActivityLevelView;
