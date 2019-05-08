import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../constants';

export default function Button({text, onPress, backgroundColor, borderColor, isLoading = false}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        {isLoading ? <ActivityIndicator size="small" color={colors.primary} /> : <Text style={{color: "#00C871"}}>{text}</Text>}
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