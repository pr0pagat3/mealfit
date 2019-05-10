import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const { width } = Dimensions.get('window');
import PlannerCard from '../../components/PlannerCard';
import axios from 'axios';
import moment from 'moment';
import { colors } from '../../constants';
var Spinner = require('react-native-spinkit');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
const images = {
  background: require('../../assets/images/homeStats.png'), // Put your own image here
};
 
export default class HomeScreen extends React.Component {
  state = {
    dailyCalorieTarget: '',
    isLoading: false,
    dailyMacros: {
      protein: '',
      fat: '',
      carbs: ''
    },
    consumedMacros: {
      protein: 0,
      fat: 0,
      carbs: 0
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});

    axios.get('https://mfserver.herokuapp.com/users/5ccb5e96a7c8fa829ba6de92')
    .then(response => {
      console.log(response.data.goal);
      this.setState({
        dailyCalorieTarget: response.data.dailyCalorieTarget,
        dailyMacros: response.data.dailyMacros,
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false})
    });
  }

  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
        <View><Text style={{color: '#fff'}}>{moment().format("dddd MMMM Do")}</Text></View>
        <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
          <Icon name="arrow-right" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )

  renderDailyPlanner() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10}}>
          <Text>Food</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RecipeFilterModal')}><Text style={{color: '#00C871'}}>+ Add Food</Text></TouchableOpacity>
        </View>
        <PlannerCard />
      </View>
    )
  }

  render() {
    const { isLoading, dailyMacros, dailyCalorieTarget, consumedMacros } = this.state;
    const { protein, fat, carbs } = dailyMacros;

    const calories = (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BodyStatsModal')}>
          <AnimatedCircularProgress
            size={175}
            width={10}
            fill={60}
            tintColor="#fff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#feb551">
              {
                (fill) => (
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                        {isLoading ? <Spinner style={{opacity: 0.5}} type='ChasingDots' isVisible={true} color={colors.white}/> : Math.round(dailyCalorieTarget) }
                        
                      </Text>
                      <Text style={{color: 'white'}}>
                        cals remaining
                    </Text>
                  </View>
                )
              }
          </AnimatedCircularProgress>
        </TouchableOpacity>
        <View style={{ marginTop: 30, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', width: width-40  }}>
          <View>
            <Text style={styles.macrosText}>Protein</Text>
            <Text style={{color: 'white'}}>{`${consumedMacros.protein} / ${Math.round(protein)}g`}</Text>
            <View style={styles.bar}>
              <View style={{height: 4, backgroundColor: '#fff', width: 30}}/>
              <View style={{height: 4, backgroundColor: '#fff', opacity: 0.2, width: 50}}/>
            </View>   
          </View>
          
          <View>
            <Text style={styles.macrosText}>Fat</Text>
            <Text style={{color: 'white'}}>{`${consumedMacros.fat} / ${Math.round(fat)}g`}</Text>
            <View style={styles.bar}>
              <View style={{height: 4, backgroundColor: '#fff', width: 20}}/>
              <View style={{height: 4, backgroundColor: '#fff', opacity: 0.2, width: 70}}/>
            </View>   
          </View>

          <View>
            <Text style={styles.macrosText}>Carbs</Text>
            <Text style={{color: 'white'}}>{`${consumedMacros.carbs} / ${Math.round(carbs)}g`}</Text>
            <View style={styles.bar}>
              <View style={{height: 4, backgroundColor: '#fff', width: 40}}/>
              <View style={{height: 4, backgroundColor: '#fff', opacity: 0.2, width: 50}}/>
            </View>   
          </View>          
        </View>
        
      </View>
      
    );

    return (
      <View style={{ flex: 1 }}>
        <ReactNativeParallaxHeader
          alwaysShowTitle={false}
          alwaysShowNavBar={true}
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={350}
          extraScrollHeight={20}
          navbarColor="#fa600d"
          title={calories}
          titleStyle={styles.titleStyle}
          backgroundImage={images.background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderDailyPlanner}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  boldText: {
    fontWeight: 'bold'
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  box: {
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.00,
    elevation: 24,
  },
  macrosText: {
    color: 'white',
    fontWeight: 'bold'
  }
});