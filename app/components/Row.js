import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Row({name, iconName, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.input}>
        <View style={styles.name}>
          <Icon name={iconName} size={25}/>
          <Text style={{marginLeft: 20}}>{name}</Text>
        </View>
        <View>
          <Icon name="chevron-right" size={25}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  name: {
    flexDirection: 'row'
  },
  input: {
    flexDirection: 'row',
    height: 40,
    borderColor: '#BDBDBD',
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});