import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

class GoalWeightView extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedOption: ''
    }
  }

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Goal Weight" />
        <View style={{flex: 1, padding: 20}}>
          <View style={{flex: 1}}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
              <Text>Set you Goal Weight!</Text>
            </View>
            <View style={styles.input}>
              <Text>0.00 lbs</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>LBS</Text>
                <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>KG</Text>
              </View>
            </View>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={() => this.props.navigation.navigate('SuccessView')} text="Save"/>
          </View>
        </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectBox: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    fontSize: 14,
    // color: "#BDBDBD",
  },
  subTitle: {
    fontSize: 10,
    // color: "#BDBDBD",
  },
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
});

export default GoalWeightView;
