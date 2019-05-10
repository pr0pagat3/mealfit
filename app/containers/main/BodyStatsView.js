import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, Image, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import { colors } from '../../constants';
import moment from 'moment';

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default class BodyStatsView extends React.Component {
  state = {
    basalMetaboliceRate: '',
    totalDailyEnergyExpenditure: '',
    goalWeight: '',
    activityLevel: '',
    dateGoalReached: '',
    weightType: ''
  }

  componentDidMount() {
    this.setState({isLoading: true});

    axios.get('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
    .then(response => {
      console.log(response.data.goal);
      this.setState({
        basalMetaboliceRate: response.data.bmr,
        totalDailyEnergyExpenditure: response.data.maintainenceCalories,
        goalWeight: response.data.goalWeight,
        activityLevel: response.data.activityLevel,
        dateGoalReached: response.data.dateGoalReached,
        weightType: response.data.weightType,
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false})
    });
  }

  render() {
    const { basalMetaboliceRate, totalDailyEnergyExpenditure, goalWeight, activityLevel, dateGoalReached, weightType } = this.state

    return (
      <ImageBackground source={require('../../assets/images/statsbackground.png')} style={styles.backgroundImage}>
        
          <View style={styles.navContainer}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <TouchableOpacity style={styles.iconLeft} onPress={() => this.props.navigation.goBack()}>
                  <Icon name="close" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
                  <Icon name="arrow-right" size={25} color="transparent" />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
          <View>
            <View style={styles.opaque}/>
            <View style={styles.box1}>
              <Text style={{color: "#fff", fontSize: 36, fontWeight: 'bold'}}>1795</Text>
              <Text style={{alignSelf: 'center', color: colors.white, fontSize: 12}}>
              {`Your target weight of ${goalWeight} ${weightType} will be reached ${moment(dateGoalReached).format('MMM DD')}`}
              </Text>
            </View>
          </View>

          <View style={{ margin: 20}}>
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }]
              }}
              width={Dimensions.get('window').width-40} // from react-native
              height={220}
              yAxisLabel={''}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 0.8) => `rgba(255, 255, 255, 0.8)`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>

          <View style={{borderTopWidth: 1, width: width-40, marginVertical: 10, marginHorizontal: 40, borderColor: "#fff", alignSelf: 'center'}} />
          
          <View style={{margin: 20}}>
            <Text style={{fontSize: 18, marginBottom: 8, color: "#fff"}}>Your Body Information</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: "#fff"}}>Activity Level</Text>
              <Text style={{color: "#fff"}}>{activityLevel}</Text>  
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: "#fff"}}>Basal Metabolic Rate</Text>
              <Text style={{color: "#fff"}}>{Math.round(basalMetaboliceRate)}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: "#fff"}}>Total Daily Energy Expenditure</Text>
              <Text style={{color: "#fff"}}>{Math.round(totalDailyEnergyExpenditure)}</Text>  
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  opaque: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: width-40,
    marginTop: 40,
    marginHorizontal: 20,
    paddingVertical: 80,
    borderRadius: 8,
    opacity: 0.1
  },
  box1: {
    marginTop: 40,
    paddingVertical: 40,
    width: width-40,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    height: 160,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});