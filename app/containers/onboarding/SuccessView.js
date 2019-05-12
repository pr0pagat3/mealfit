import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import moment from 'moment';
import { colors } from '../../constants';

export default function SuccessView({navigation}) {
  const [ data, setData ] = useState({
    dailyCalorieTarget: 0,
    goalWeight: 0,
    dateGoalReached: moment().format('MMM DD'),
    weightType: ''
  })

  const [ isContentLoading, setIsContentLoading ] = useState(false)
  const [ isSaveLoading, setIsSaveLoading ] = useState(false)
  const [ url, setUrl ] = useState('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsContentLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsContentLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Success" progress={100}/>
      <View style={{flex: 1, padding: 20}}>

        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Icon name="checkbox-marked" color={colors.primary} size={100}/>
          <Text style={styles.title}>Congrats!</Text>
          <Text style={styles.subTitle}>You've successfully created your account</Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', marginVertical: 40 }}>
          <Text style={styles.calorieText}>{Math.round(data.dailyCalorieTarget)}</Text>
          <Text>Your Daily Calorie Goal</Text>
        </View>

        <View style={{justifyContent: 'flex-end'}}>
          <Text style={{alignSelf: 'center', fontSize: 12}}>Your target weight of 
            <Text style={{color: colors.primary}}> {`${data.goalWeight} ${data.weightType}`} </Text> will be reached 
            <Text style={{color: colors.primary}}> {moment(data.dateGoalReached).format('MMM DD')}</Text>
          </Text>
          <Button onPress={() => navigation.navigate('Home')} text="Start Your Journey!"/>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.lightgrey,
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
    color: colors.primary,
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 14,
    marginVertical: 10,
  },
});
