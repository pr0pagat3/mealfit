import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart } from 'react-native-chart-kit'

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default class BodyStatsView extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/statsbackground.png')} style={styles.backgroundImage}>
        <View style={styles.navContainer}>
          <View style={styles.statusBar} />
          <View style={styles.navBar}>
              <TouchableOpacity style={styles.iconLeft} onPress={() => this.props.navigation.goBack()}>
                  <Icon name="close" size={25} color="#fff" />
              </TouchableOpacity>
              <View><Text style={{color: '#fff'}}>Personal Info</Text></View>
              <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
                  <Icon name="arrow-right" size={25} color="transparent" />
              </TouchableOpacity>
          </View>
        </View>
        
        <View>
          <View style={styles.opaque}/>
          <View style={styles.box1}>
            <Text style={{color: "#fff", fontSize: 36, fontWeight: 'bold'}}>1795</Text>
            <Text style={{color: "#fff" }}>Average Gained Calorie Per Day</Text>
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
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
        <View style={{borderTopWidth: 1, width: width-40, margin: 40, borderColor: "#fff", alignSelf: 'center'}} />
        
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 18, marginBottom: 8, color: "#fff"}}>Average Eaten Nutrients</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: "#fff"}}>Calories (kcal)</Text>
            <Text style={{color: "#fff"}}>1795</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: "#fff"}}>Protein (g)</Text>
            <Text style={{color: "#fff"}}>300</Text>  
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: "#fff"}}>Fat (g)</Text>
            <Text style={{color: "#fff"}}>150</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: "#fff"}}>Carbohydrates (g)</Text>
            <Text style={{color: "#fff"}}>110</Text>
          </View>
          
          
          
        </View>
        
        
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  opaque: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: width-40,
    marginTop: 60,
    marginHorizontal: 20,
    paddingVertical: 80,
    borderRadius: 8,
    opacity: 0.1
  },
  box1: {
    marginTop: 60,
    paddingVertical: 40,
    // backgroundColor: 'red',
    // borderWidth: 1,
    width: width-40,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    height: 160,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    // marginHorizontal: 10,
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