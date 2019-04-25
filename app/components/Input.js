import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function Input({placeholder}) {
  return (
    <TextInput 
        style={styles.input} 
        placeholder={placeholder}
      />
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: '#BDBDBD',
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: 10,
      padding: 10
    }
  });