import React from 'react'
import { View, TouchableOpacity } from 'react-native';
// import { gql, graphql, compose } from 'react-apollo'
import FBSDK, { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Button, Text, TextInput } from '@shoutem/ui'
import Picker from 'react-native-picker';
// import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const FACEBOOK_APP_ID = '324467888148403';
const FACEBOOK_API_VERSION = 'v3.2';

class AppContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      weight: ''
    }

    this.pickWeight = this.pickWeight.bind(this);
  }

  _fbAuth(){
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
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

  // <LoginButton
  //   onLoginFinished={
  //     (error, result) => {
  //       if (error) {
  //         console.log("login has error: " + result.error);
  //       } else if (result.isCancelled) {
  //         console.log("login is cancelled.");
  //       } else {
  //         AccessToken.getCurrentAccessToken().then(
  //           (data) => {
  //             console.log(data.accessToken.toString())
  //           }
  //         )
  //       }
  //     }
  //   }
  //   onLogoutFinished={() => console.log("logout.")}/>

  render () {
    // if (this._isLoggedIn()) {
    //   return this.renderLoggedIn()
    // } else {
    //   return this.renderLoggedOut()
    // }

    return(
      <View style={{flex: 1, marginTop: 50, justifyContent: 'space-evenly'}}>
        <View>
          <FormLabel >Current Weight123</FormLabel>
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
          <Button onPress={() => this.props.navigation.navigate('MyModal')} styleName="secondary full-width">
            <Text>Continue</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default AppContainer;
