import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const ActivityLevelSelect = function({title, subTitle, onPress, isSelected}) {
  const color = isSelected ? '#00C871' : null;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.selectBox, { borderColor: isSelected ? '#00C871' : '#BDBDBD' }]}>
        <Text style={[styles.title, { color: color }]}>{title}</Text>
        <Text style={[styles.subTitle, { color: color }]}>{subTitle}</Text>
        {isSelected ? <Icon name='check-outline' color='#00C871' style={{position: 'absolute', right: 5, top: 5}}/> : null}
      </View>
    </TouchableOpacity>
  )
}

class ActivityLevelView extends React.Component {
  constructor() {
    super()

    this.state = {
      activityLevel: ''
    }
  }

  onSelectNotVeryActive = () => this.setState({activityLevel: 'not very active'})
  onSelectLightlyActive = () => this.setState({activityLevel: 'lightly active'})
  onSelectActive = () => this.setState({activityLevel: 'active'})
  onSelectVeryActive = () => this.setState({activityLevel: 'very active'})
  onSelectExtremelyActive = () => this.setState({activityLevel: 'extremely active'})

  onSave = () => {
    // axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
    //   activityLevel: this.state.activityLevel,
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    this.props.navigation.navigate('MainGoalView')
  }

  render () {
    const { activityLevel } = this.state;

    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Activity Level" progress={45}/>
        <ScrollView>
          <View style={{flex: 1, padding: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
              <Text>How active are you?</Text>
            </View>
            <ActivityLevelSelect title="Not Very Active" subTitle="little or no exercise" onPress={this.onSelectNotVeryActive} isSelected={activityLevel === "not very active"}/>
            <ActivityLevelSelect title="Lightly Active" subTitle="light exercise/sports 1-3 days/week" onPress={this.onSelectLightlyActive} isSelected={activityLevel === "lightly active"}/>
            <ActivityLevelSelect title="Active" subTitle="moderate exercise/sports 3-5 days/week" onPress={this.onSelectActive} isSelected={activityLevel === "active"}/>
            <ActivityLevelSelect title="Very Active" subTitle="hard exercise/sports 6-7 days/week" onPress={this.onSelectVeryActive} isSelected={activityLevel === "very active"}/>
            <ActivityLevelSelect title="Extremely Active" subTitle="very hard exercise/sports and physical job" onPress={this.onSelectExtremelyActive} isSelected={activityLevel === "extremely active"}/>
          </View>
        </ScrollView>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Button onPress={this.onSave} text="Save"/>
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
