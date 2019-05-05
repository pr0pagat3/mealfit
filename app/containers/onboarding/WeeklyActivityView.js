import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

class WeeklyActivityView extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedOption: ''
    }
  }

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Weekly Activity Goal" progress={75} />
        
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>Set your weekly goal!</Text>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Lose 0.5 lbs</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Lose 1 lbs</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Lose 1.5 lbs</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Lose 2 lbs</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={() => this.props.navigation.navigate('GoalWeightView')} text="Save"/>
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
});

export default WeeklyActivityView;
