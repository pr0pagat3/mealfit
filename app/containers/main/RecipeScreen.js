import React from 'react';
import { View, StyleSheet, Platform, SCREEN_HEIGHT, Text, TouchableOpacity, Dimensions } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('window');
import axios from 'axios';
import { colors } from '../../constants';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
const images = {
  background: require('../../assets/images/homeStats.png'),
};

export default class RecipeScreen extends React.Component {
  state = {
    isLoading: false,
    servingSize: '',
    info: '',
    image: '',
    ingredients: [],
  }

  componentDidMount() {
    this.setState({isLoading: true});

    axios.get('http://localhost:3000/recipes/1')
    .then(response => {
      console.log(response.data);
      this.setState({
        info: response.data.info,
        servingSize: response.data.servingSize,
        image: response.data.image,
        ingredients: response.data.ingredients,
        isLoading: false,
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
        <TouchableOpacity style={styles.iconLeft} onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )

  renderContent = () => {
    const { info, servingSize } = this.state;
    
    return (
      <View>
        <View style={{flex: 1, backgroundColor: "#fff"}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
            <Text>Number Of Servings</Text>
            <Text>{servingSize}</Text>
          </View>
        
          <View style={{marginHorizontal: 20, marginVertical: 5}}>
            <Text style={{color: "#707070"}}>{info}</Text>
          </View>

          <ScrollableTabView
            style={{marginTop: 20, backgroundColor: colors.background }}
            tabBarBackgroundColor={colors.white}
            tabBarUnderlineStyle={{backgroundColor: colors.primary}}
            tabBarActiveTextColor={colors.primary}
            tabBarInactiveTextColor="#707070"
            initialPage={1}
            renderTabBar={() => <DefaultTabBar />}
          >
            <View tabLabel="Ingredients" style={styles.box}>
              {this.renderIngredients()}
            </View>
            <Text tabLabel='Instructions'>favorite</Text>
          </ScrollableTabView>     

        </View>
      </View>
    );
  }

  renderIngredients = () => {
    return this.state.ingredients.map((ingredient, index) => <Text style={{color: '#707070', marginVertical: 5}}><Icon size={5} name="checkbox-blank-circle"/> {ingredient}</Text>)
  }

  render() {
    const { image } = this.state;

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
    backgroundColor: colors.background,
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
  macrosText: {
    color: 'white',
    fontWeight: 'bold'
  },
  box: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.00,
    elevation: 24,
  },
});