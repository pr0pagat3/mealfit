import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedCard from '../../../components/FeedCard';

export default Community = ({label}) => (
  <View style={styles.container}>
    <View style={{flex: 1, backgroundColor: "#EEEEEE"}}>

    <ScrollView>
      <FeedCard 
        title="Jess posted a progress photo!"
        image={require('../../../assets/images/profile1.jpg')}
        postTime="4m"
        likeCount={2}
        commentCount={10}
        contentImage={require('../../../assets/images/fitgirl.jpg')}
      />
      <FeedCard
        title="Mike ran 14 miles, A new record!"
        image={require('../../../assets/images/profile2.jpeg')}
        postTime="6h"
        likeCount={4}
        commentCount={2}
        contentImage={require('../../../assets/images/map.png')}
      />
      <FeedCard
        title="Jess posted a progress photo!"
        image={require('../../../assets/images/profile1.jpg')}
        postTime="4m"
        likeCount={2}
        commentCount={10}
      />
      <FeedCard
        title="Mike ran 14 miles, A new record!"
        image={require('../../../assets/images/profile2.jpeg')}
        postTime="6h"
        likeCount={4}
        commentCount={2}
        contentImage={require('../../../assets/images/dog.png')}
      />
      <FeedCard
        title="Jess posted a progress photo!"
        image={require('../../../assets/images/profile1.jpg')}
        postTime="4m"
        likeCount={2}
        commentCount={10}
      />
      <FeedCard
        title="Mike ran 14 miles, A new record!"
        image={require('../../../assets/images/profile2.jpeg')}
        postTime="6h"
        likeCount={4}
        commentCount={2}
      />
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00C871",
  },
  feedCard: {
    height: 150,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#BDBDBD'
  },
  cardContent: {
    flex: 1, 
    // backgroundColor: 'green',
  },
  footerText: {
    fontSize: 10,
    color: "#BDBDBD",
  },
  divider: {
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderColor: '#BDBDBD',
    marginVertical: 5
  },
  cardLeftSection: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 0.2,
  },
  cardRightSection: {
    flex: 0.8,
    // backgroundColor: 'red'
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});