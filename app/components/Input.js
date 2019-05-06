import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input({placeholder, iconName, onChangeText, onFocus}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
      {iconName ? <Icon name={iconName} size={30} color="#BDBDBD" style={styles.icon}/> : null}
    </View>
    
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 10,
    marginLeft: 0
  }
});