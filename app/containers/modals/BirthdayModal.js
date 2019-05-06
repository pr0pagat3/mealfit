import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import DatePicker from 'react-native-date-picker';

export default class RecipeFilterModal extends React.Component {
  state = { date: new Date() }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', opacity: 0.2, padding: 40 }}>
        {/* <DatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          style={{backgroundColor: '#fff'}}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})
