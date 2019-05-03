import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

class MeasurementView extends React.Component {
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

    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Measurement" />
        <View style={{flex: 1, padding: 20}}>
          <View style={{flex: 1}}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
              <Text>How much do you weigh?</Text>
            </View>
            <View style={styles.input}>
              <Text>145 lbs</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>LBS</Text>
                <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>KG</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
              <Text>How Tall are you?</Text>
            </View>
            <View style={styles.input}>
              <Text>5 ft, 8 in</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>FT</Text>
                <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>CM</Text>
              </View>
            </View>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={() => this.props.navigation.navigate('ActivityLevelView')} text="Save"/>
          </View>
        </View>
          
      </View>
    )
  }
}

export default MeasurementView;

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