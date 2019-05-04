import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Dimensions, Text, SCREEN_HEIGHT, Platform, Image } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
const { width } = Dimensions.get('window');
import FeedCard from '../../../components/FeedCard';

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default Profile = ({label}) => {
  renderNavBar = () => (
    <View style={styles.navContainer}>
      <View style={styles.statusBar} />
      <View style={styles.navBar}>
        <Text style={{color: '#fff'}}>23 Followers</Text>
        <Text style={{color: '#fff'}}>40 Following</Text>
      </View>
    </View>
  )

  renderContent = () => (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <FeedCard 
        title="Jess posted a progress photo!"
        image={require('../../../assets/images/fitgirl.jpg')}
        postTime="4m"
        likeCount={2}
        commentCount={10}
        contentImage={require('../../../assets/images/fitgirl.jpg')}
      />
      <FeedCard
        title="Mike ran 14 miles, A new record!"
        image={require('../../../assets/images/fitgirl.jpg')}
        postTime="6h"
        likeCount={4}
        commentCount={2}
        contentImage={require('../../../assets/images/map.png')}
      />
      <FeedCard
        title="Jess posted a progress photo!"
        image={require('../../../assets/images/fitgirl.jpg')}
        postTime="4m"
        likeCount={2}
        commentCount={10}
      />
    </View>
  )

  const calories = (
    <View style={{flex: 1, justifyContent: 'space-around', paddingVertical: 40 }}>
      <Image style={{width: 100, height: 100, borderRadius: 50, borderWidth: 1, backgroundColor: '#fff'}} source={require('../../../assets/images/fitgirl.jpg')}/>
      <Text style={{color: '#fff'}}>Warren Phen</Text>
    </View>
    )

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
    )
};

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