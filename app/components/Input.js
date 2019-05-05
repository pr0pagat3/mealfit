import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input({placeholder, iconName, onChangeText}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
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
  }
});