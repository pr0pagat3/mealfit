import React from 'react';
import { View, SectionList, StyleSheet, TextInput, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dash from 'react-native-dash';

export default function FeedCard({firstName, image, contentImage, isOnline, isPremiumUser, title, content, postTime, likeCount = 0, commentCount = 0}) {
  return (
    <View style={styles.feedCard}> 
      <View style={styles.cardLeftSection}>
        <Image style={{width: 50, height: 50, borderRadius: 25}} source={image}/>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon name='account-plus-outline' color="#404040" />
            <Text style={styles.footerText}> Follow</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Dash dashColor="#BDBDBD" dashGap={6} style={{width: 1, flexDirection:'column', marginVertical: 8}}/>

      <View style={styles.cardRightSection}>

      <View style={styles.cardContent}>
        <View style={{}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 12, color: "#005068", fontWeight: 'bold'}}>{title}</Text>
            <Text style={{fontSize: 10, color: "#005068"}}>{postTime}</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 12, color: '#fa600d'}}>I ran 2 miles today. A new record!</Text>
            {image ? <Image style={{width: 100, height: 100, marginVertical: 10}}source={contentImage}/> : null}
          </View>  
        </View>
      </View>

      <View style={styles.cardFooterSection}>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Icon name='message-outline' color="#404040" size={12}/>
            <Text style={styles.footerText}> {commentCount} Comments</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Icon name='heart-outline' color="#404040" />
            <Text style={styles.footerText}> {likeCount} Likes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
    
  )
}

const styles = StyleSheet.create({
  cardFooterSection: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  feedCard: {
    minHeight: 150,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    backgroundColor: "#fff",
  },
  cardContent: {
    flex: 1, 
    padding: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#404040"
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