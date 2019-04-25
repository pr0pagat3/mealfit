import React from 'react';
import { ListView, Row, View, Icon, Text, Divider, TouchableOpacity } from '@shoutem/ui';
import { Dimensions, SCREEN_HEIGHT, Platform, StyleSheet, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../recipes';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
const { height, width } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default class StatsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants
    }
  }

  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <Text style={{color: '#fff'}}>Profile</Text>
        <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
          <View style={{backgroundColor: "#FFD500", borderRadius: 8, padding: 5 }}>
            <Text style={{color: '#000'}}>Go Premium</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )

  renderContent = () => (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalInfo')}>
        <Row styleName="small">
          <Icon name="user-profile" />
          <Text>Personal Info</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
      </TouchableOpacity>
      <Row styleName="small">
        <Icon name="equalizer" />
        <Text>Body Stats</Text>
        <Icon styleName="disclosure" name="right-arrow" />
      </Row>
      <Row styleName="small">
        <Icon name="add-to-favorites-off" />
        <Text>Favourites</Text>
        <Icon styleName="disclosure" name="right-arrow" />
      </Row>
      <Row styleName="small">
        <Icon name="settings" />
        <Text>Settings</Text>
        <Icon styleName="disclosure" name="right-arrow" />
      </Row>

      <View style={{borderTopWidth: 1, width: width-20, marginHorizontal: 20, alignSelf: 'center'}} />
      <Row styleName="small">
        <Icon name="checkbox-on" style={{color: "#00C871"}}/>
        <Text style={{color: "#00C871"}}>Set a New Goal</Text>
        <Icon style={{color: "#00C871"}} styleName="disclosure" name="right-arrow" />
      </Row>
    </View>
  )

  render() {
    const calories = (<Text><Image style={{width: 100, height: 100, borderRadius: 50, borderWidth: 1, backgroundColor: '#fff'}} source={require('../assets/images/dog.png')}/></Text>)

    return (
      <View style={{ flex: 1 }}>
        <ReactNativeParallaxHeader
          alwaysShowTitle={false}
          alwaysShowNavBar={true}
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={300}
          extraScrollHeight={20}
          navbarColor="#00C871"
          title={calories}
          titleStyle={styles.titleStyle}
          backgroundColor="#00C871"
          // backgroundImage={images.background}
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