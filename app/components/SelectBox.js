import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SelectBox({title, subTitle, onPress, isSelected}) {
  const color = isSelected ? '#00C871' : null;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.selectBox, { borderColor: isSelected ? '#00C871' : '#BDBDBD' }]}>
        <Text style={[styles.title, { color: color }]}>{title}</Text>
        {subTitle ? <Text style={[styles.subTitle, { color: color }]}>{subTitle}</Text> : null}
        {isSelected ? <Icon name='check-outline' color='#00C871' style={{position: 'absolute', right: 5, top: 5}}/> : null}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  selectBox: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 10,
  },
});