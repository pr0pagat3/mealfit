import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

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
        <NavBar headerTitle="Activity Level" />
        
        <View style={{flex: 1, padding: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Text>How active are you?</Text>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Not Very Active</Text>
                <Text style={styles.subTitle}>little or no exercise</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Lightly Active</Text>
                <Text style={styles.subTitle}>light exercise/sports 1-3 days/week</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Active</Text>
                <Text style={styles.subTitle}>moderate exercise/sports 3-5 days/week</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Very Active</Text>
                <Text style={styles.subTitle}>hard exercise/sports 6-7 days/week</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.selectBox}>
                <Text style={styles.title}>Extremely Active</Text>
                <Text style={styles.subTitle}>very hard exercise/sports and physical job</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={() => this.props.navigation.navigate('MainGoalView')} text="Save"/>
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
    // alignItems: 'center',
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 20
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

export default ActivityLevelView;
