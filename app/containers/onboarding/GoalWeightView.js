import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import PickerDropdown from '../../components/PickerDropdown';

class GoalWeightView extends React.Component {
  state = {
    isPickerCollapsed: true,
  }
  
  expandWeightPicker = () => this.setState({isPickerCollapsed: !this.state.isPickerCollapsed})

  render () {
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Goal Weight" progress={90}/>
        <ScrollView>
        <View style={{flex: 1, padding: 20}}>
          <PickerDropdown
              title='Your goal weight?'
              value={145}
              valueTypes={['LBS', 'KG']}
              isPickerCollapsed={this.state.isPickerCollapsed}
              expandHandle={this.expandWeightPicker}
            />
        </View>
        </ScrollView>
        <View style={{backgroundColor: '#fff', padding: 20}}>
          <Button onPress={() => this.props.navigation.navigate('SuccessView')} text="Save"/>
        </View>
      </View>
    )
  }
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
    // color: "#BDBDBD",
  },
  subTitle: {
    fontSize: 10,
    // color: "#BDBDBD",
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
});

export default GoalWeightView;
