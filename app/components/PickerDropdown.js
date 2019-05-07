import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Picker, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default class PickerDrodown extends React.Component {
  state = {
    valueTypes: this.props.valueTypes ? this.props.valueTypes : null,
    valueTypeSelected: this.props.valueTypes ? this.props.valueTypes[0]: null,
    value: this.props.defaultValue.toString()
  }

  // onChangeValueType = () => this.setState({valueTypeSelected: })

  renderTypes() {
    return this.props.valueTypes.map((type, index) => {
      const { valueTypeSelected } = this.state;
      const valueTypeStyle = {
        marginHorizontal: 10,
        color: valueTypeSelected === type ? '#00C871' : '#BDBDBD',
        fontWeight: 'bold',
      }

      return <Text key={index} style={valueTypeStyle}>{type}</Text>
      }
    )
  }

  renderPickerItems() {
    let numbers = []
    for (let i = 0; i < 500; i++) {
      numbers.push(i)
    }

    return numbers.map(number => <Picker.Item key={number} label={number.toString()} value={number.toString()} />)
  }
  
  renderPickerItemTypes() {
    return this.props.valueTypes.map((type, index) => <Picker.Item key={index} label={type.toLowerCase()} value={type} />)
  }

  render() {
    const { valueTypes, value } = this.state;
    const { title,  isPickerCollapsed } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Text>{title}</Text>
        </View>
        <TouchableOpacity onPress={this.props.expandHandle}>
          <View style={styles.input}>
            <Text>{value}</Text>
            <View style={{flexDirection: 'row'}}>
              {valueTypes ? this.renderTypes() : null}
            </View>
          </View>
        </TouchableOpacity>

      <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', display: isPickerCollapsed ? 'none' : 'flex'}}>
        <Picker
          selectedValue={this.state.value}
          style={{height: 50, width: width/2 - 20}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({value: itemValue})
          }>
          {this.renderPickerItems()}
        </Picker>
        <Picker
          selectedValue={this.state.valueTypeSelected}
          style={{height: 50, width: width/2 - 20}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({valueTypeSelected: itemValue})
          }>
          {this.renderPickerItemTypes()}
        </Picker>
        </View>
      </View>
    )
  }
}

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