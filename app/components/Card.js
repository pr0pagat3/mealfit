import React from 'react';
import { TextInput, View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from '@shoutem/ui';
const { height, width } = Dimensions.get('window');
// import { Card } from '@shoutem/ui'

export function Card({image, name}) {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={{flex: 1}}>
        <Image source={image} style={styles.image}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 0.85}}>
            <Text numberOfLines={1} style={{fontSize: 12}}>{name}</Text>
            <Text style={{fontSize: 10, fontWeight: '100' }}>325 KCAL</Text>
          </View>
          <View style={{flex: 0.15}}><Icon name="heart" color="#FF006F" size={20}/></View>
          
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.00,
    elevation: 24,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    width: (width/2 - 20),
    height: (width/2 - 10),
    borderRadius: 8,
    padding: 5
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 8,
    width: (width/2 - 30),
    height: (width/2 - 50),
  }
});