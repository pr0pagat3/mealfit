import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Picker, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { colors } from '../constants';

export default class PickerDrodown extends React.Component {
  renderTypes() {
    return this.props.valueTypes.map((type, index) => {
      const { typeValue } = this.props;
      const valueTypeStyle = {
        marginHorizontal: 10,
        color: typeValue === type ? colors.primary : colors.lightgrey,
        fontWeight: 'bold',
      }

      return <Text key={index} style={valueTypeStyle}>{type.toUpperCase()}</Text>
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
    // const { valueTypes, valueTypeSelected } = this.state;
    const { title, isPickerCollapsed, onChange, onChangeType, value, valueTypes, typeValue } = this.props;

    return (
      <View style={{justifyContent: 'flex-start'}}>
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

      <View style={{ flexDirection: 'row', justifyContent: 'center', display: isPickerCollapsed ? 'none' : 'flex'}}>
        <Picker
          selectedValue={value}
          style={{width: width/2 - 20}}
          onValueChange={onChange}
        >
          {this.renderPickerItems()}
        </Picker>
        <Picker
          selectedValue={typeValue}
          style={{ width: width/2 - 20}}
          onValueChange={onChangeType}
        >
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
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  }
})