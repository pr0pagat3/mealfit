import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';
import { colors } from '../../constants';
import Placeholder, { Line, Media } from 'rn-placeholder';

export default function WeeklyActivityView({navigation}) {
  const [ data, setData ] = useState({goal: 'gain', weightType: '', weeklyRate: ''})
  const [ isContentLoading, setIsContentLoading ] = useState(false)
  const [ isSaveLoading, setIsSaveLoading ] = useState(false)
  const [ url, setUrl ] = useState('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
  const [isError, setIsError] = useState(false);

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

  function renderWeeklyGoalSelectBox() {
    const lbsArray = [0.5, 1, 1.5, 2];
    const kgArray = [0.3, 0.5, 0.7, 0.9];
    const mapArray = data.weightType === 'lbs' ? lbsArray : kgArray;
    console.log(data)
    return mapArray.map((goal, index) =>
      <SelectBox
        key={index}
        title={`${data.goal} ${goal} ${data.weightType}`}
        onPress={() => setData({...data, weeklyRate: goal})}
        isSelected={data.weeklyRate === goal}
      />
    )
  }

  onSave = async () => {
    setIsSaveLoading(true)
    await axios.put('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92', {
      weeklyRate: data.weeklyRate
    })
    .then(response => {
      console.log(response);
      setIsSaveLoading(false)
    })
    .catch(error => {
      console.log(error);
      setIsSaveLoading(false)
    });

    return navigation.navigate('GoalWeightView')
  }

  return (
    <View style={{flex: 1}}>
      <NavBar headerTitle="Weekly Activity Goal" progress={75} />
      <ScrollView>
      <View style={{flex: 1, padding: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Text>Set your weekly goal!</Text>
        </View>

        {/* <View style={{flex: 1}}>
          {renderWeeklyGoalSelectBox()}
        </View> */}
        <Placeholder
          isReady={!isContentLoading}
          animation="fade"
          whenReadyRender={() => renderWeeklyGoalSelectBox()}
          renderLeft={() => <Media hasRadius />}
          renderRight={() => <Media />}
        >
          <Line width="70%" />
          <Line />
          <Line />
          <Line width="30%" />
        </Placeholder>

      </View>
      </ScrollView>
      <View style={{backgroundColor: colors.white, padding: 20}}>
        <Button onPress={this.onSave} isLoading={isSaveLoading} text="Save"/>
      </View>
    </View>
  )
}
