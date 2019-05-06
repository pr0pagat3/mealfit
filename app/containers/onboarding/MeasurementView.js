import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Picker, Switch, Dimensions } from 'react-native';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import Collapsible from 'react-native-collapsible';
const { width } = Dimensions.get('window');

class MeasurementView extends React.Component {
  state = {
    weight: '150',
    height: false,
    isWeightPickerCollapsed: true,
    isHeightPickerCollapsed: true,
  }

  expandWeightPicker = () => {this.setState({isWeightPickerCollapsed: !this.state.isWeightPickerCollapsed})}
  expandHeightPicker = () => {this.setState({isHeightPickerCollapsed: !this.state.isHeightPickerCollapsed})}

  renderWeightPickerItems = () => {
    let numbers = []
    for (let i = 0; i < 500; i++) {
      numbers.push(i)
    }

    return numbers.map(number => <Picker.Item key={number} label={number.toString()} value={number.toString()} />)
  }

  render () {
    console.log(this.state, 'sadfhello')
    return(
      <View style={{flex: 1}}>
        <NavBar headerTitle="Measurement" progress={30}/>
        <View style={{flex: 1, padding: 20}}>
          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
              <Text>How much do you weigh?</Text>
            </View>
              <TouchableOpacity onPress={this.expandWeightPicker}>
                <View style={styles.input}>
                  <Text>145 lbs</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>LBS</Text>
                    <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>KG</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', display: this.state.isWeightPickerCollapsed ? 'none' : 'flex'}}>
              <Picker
                selectedValue={this.state.weight}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({weight: itemValue})
                }>
                {this.renderWeightPickerItems()}
              </Picker>
              <Picker
                selectedValue={this.state.weight}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({weight: itemValue})
                }>
                <Picker.Item label="lbs" value="lbs" />
                <Picker.Item label="kg" value="kg" />
              </Picker>
            </View>
          
          <View>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
              <Text>How Tall are you?</Text>
            </View>
            <TouchableOpacity onPress={this.expandHeightPicker}>
              <View style={styles.input}>
                <Text>5 ft, 8 in</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginHorizontal: 10, color: '#00C871', fontWeight: 'bold'}}>FT</Text>
                  <Text style={{marginHorizontal: 10, color: '#BDBDBD', fontWeight: 'bold'}}>CM</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', display: this.state.isHeightPickerCollapsed ? 'none' : 'flex'}}>
            <Picker
              selectedValue={this.state.weight}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({weight: itemValue})
              }>
              {this.renderWeightPickerItems()}
            </Picker>
            <Picker
              selectedValue={this.state.weight}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({weight: itemValue})
              }>
              <Picker.Item label="lbs" value="lbs" />
              <Picker.Item label="kg" value="kg" />
            </Picker>
          </View>
        
          <View style={{justifyContent: 'flex-end'}}>
            <Button onPress={() => this.props.navigation.navigate('ActivityLevelView')} text="Save"/>
          </View>
        </View>
          
      </View>
    )
  }
}

export default MeasurementView;

const styles = StyleSheet.create({
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
})