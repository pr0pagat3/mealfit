import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export function Button({text, onPress}) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={{color: "#00C871"}}>Save</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#00C871",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});