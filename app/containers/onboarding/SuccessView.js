import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import moment from 'moment';

class SuccessView extends React.Component {
  state = {
    dailyCalorieTarget: 0,
    goalWeight: 0,
    dateGoalReached: moment().format('MMM DD'),
    weightType: ''
  }

  componentDidMount() {
    axios.get('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
    .then(response => {
      console.log(response.data.goal);
      this.setState({
        dailyCalorieTarget: response.data.dailyCalorieTarget,
        goalWeight: response.data.goalWeight,
        dateGoalReached: response.data.dateGoalReached,
        weightType: response.data.weightType,
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false})
    });
  }

  render () {
    const { goalWeight, weightType, dateGoalReached } = this.state;
    console.log(moment(dateGoalReached).format('MMM DD'))

    return (
      <View style={{flex: 1}}>
        <NavBar headerTitle="Success"/>
        <View style={{flex: 1, padding: 20}}>

          <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
            <Icon name="checkbox-marked" color="#00C871" size={100}/>
            <Text style={styles.title}>Congrats!</Text>
            <Text style={styles.subTitle}>You've successfully created your account</Text>
          </View>

          <View style={{flex: 1, alignItems: 'center', marginVertical: 40 }}>
            <Text style={styles.calorieText}>{Math.round(this.state.dailyCalorieTarget)}</Text>
            <Text>Your Daily Calorie Goal</Text>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Text style={{alignSelf: 'center', fontSize: 12}}>Your target weight of 
              <Text style={{color: "#00C871"}}> {`${goalWeight} ${weightType}`} </Text> will be reached 
              <Text style={{color: "#00C871"}}> {moment(dateGoalReached).format('MMM DD')}</Text>
            </Text>
            <Button onPress={() => this.props.navigation.navigate('Home')} text="Start Your Journey!"/>
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
  calorieText: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#00C871",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 14,
    marginVertical: 10,
    // color: "#BDBDBD",
  },
});

export default SuccessView;
