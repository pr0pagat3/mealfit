import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, TouchableOpacity, Dimensions } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('window');
import restaurants from '../recipes';

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
const images = {
  background: require('../../assets/images/homeStats.png'), // Put your own image here
};

export default class RecipeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconLeft} onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )

  renderContent = () => (
    <View>
      <View style={{flex: 1, backgroundColor: "#fff"}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
        <Text>Number Of Servings</Text>
        <Text>4</Text>
      </View>
      
      <View style={{marginHorizontal: 20, marginVertical: 5}}>
        <Text style={{color: "#707070"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', borderBottomWidth: 5, borderColor: "#00C871", flex: 0.5, justifyContent: 'center', paddingVertical: 15}}>
          <Icon color="#00C871" name="cart-outline" size={20}/>
          <Text style={{fontSize: 16, color: "#00C871"}}>Ingredients</Text>
        </View>
        <View style={{flexDirection: 'row', flex: 0.5, justifyContent: 'center', paddingVertical: 15}}>
          <Icon color="#707070" name="clipboard-text-outline" size={20}/>
          <Text style={{fontSize: 16, color: "#707070"}}>Instructions</Text>
        </View>
      </View>
        
      </View>
      
    </View>
  );

  render() {
    const calories = (
      <View style={{ height: 180, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', width: width-40  }}>
      <View>
        <Text style={{color: '#fff'}}>Salmon and Fresh Salad</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="alarm" size={18} color="#fff" />
        <Text style={{color: '#fff', marginLeft: 10}}>15 minutes</Text>
      </View>         
    </View>
      
    );

    return (
      <View style={{ flex: 1 }}>
       <ReactNativeParallaxHeader
        alwaysShowTitle={false}
        alwaysShowNavBar={true}
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={250}
        extraScrollHeight={20}
        navbarColor="#00C871"
        title={calories}
        titleStyle={styles.titleStyle}
        backgroundImage={{uri: 'https://leaf.nutrisystem.com/wp-content/uploads/2016/07/flex-meals-explained.jpg'}}
        backgroundImageScale={1.2}
        renderNavBar={this.renderNavBar}
        renderContent={this.renderContent}
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