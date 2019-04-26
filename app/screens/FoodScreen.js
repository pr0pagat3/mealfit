import React from 'react';
import { View, Platform, Modal, TouchableHighlight, TextInput, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import recipes from '../recipes';
const { width } = Dimensions.get('window');
import { Card } from '../components/Card';

export default class FoodScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCard = ({item}) => {
    return <Card image={item.image} name={item.name}/>
  }

  render() {
   return (
      <View style={{ flex: 1 }}>
        <View style={{backgroundColor: '#00C871', height: 120, justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
            <View><Text style={{color: '#fff', fontSize: 18 }}>Recipes</Text></View>
            <View><Icon color='#fff' size={25} name="plus" /></View>
          </View>
          <TextInput placeholder="Find a Recipe" style={{ marginVertical: 10, height: 40, paddingHorizontal: 10, width: width - 40, backgroundColor: '#fff',  borderRadius: 4, alignSelf: 'center' }}/>
        </View>
      
        <View style={{flex: 1, backgroundColor: "#F9F9F9" }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: "#EEEEEE"}}>
            <Text>Get more out of Mealfit</Text>
            <TouchableOpacity onPress={() => {}}>
              <View style={{backgroundColor: "#FFD500", borderRadius: 8, padding: 5 }}>
                <Text style={{color: '#000', fontSize: 10}}>Go Premium</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text>Popular</Text>
          </View>

          <FlatList
            data={recipes}
            renderItem={this.renderCard}
            horizontal={true}
            style={{padding: 10}}
          /> 

          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text>Recommended</Text>
          </View>

          {/* <View style={{marginLeft: 10, marginTop: 10}}>
            <Text>Popular, Ketogenic, Paleo, Vegan, </Text>
          </View>
          
          <FlatList
            data={recipes}
            renderItem={this.renderCard}
            horizontal={true}
            style={{padding: 10}}
          /> 
          <FlatList
            data={recipes}
            renderItem={this.renderCard}
            horizontal={true}
            style={{padding: 10}}
          /> */}
        </View>
      </View>
    );
  }
}
