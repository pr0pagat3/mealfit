import React from 'react';
import { View, ScrollView, Platform, Modal, TouchableHighlight, Image, TextInput, Dimensions, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import recipes from '../recipes';
const { width } = Dimensions.get('window');
import Card from '../../components/Card';

export default class FoodScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCard = ({item}) => {
    return <Card image={item.image} name={item.name} onPress={() => this.props.navigation.push('Recipe')}/>
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
          <ScrollView>
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Text>Recommended</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.card}>
              <View style={{flex: 1}}>
              <Image source={{uri: 'https://shoutem.github.io/static/getting-started/restaurant-6.jpg'}} style={styles.image}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 0.9}}>
                  <Text numberOfLines={1} style={{fontSize: 12}}>Boosted Protein</Text>
                  <Text style={{fontSize: 10, fontWeight: '100' }}>325 KCAL</Text>
                </View>
                <View style={{flex: 0.1}}><Icon name="heart-outline" color="#BDBDBD" size={20}/></View>
              </View>
            </View>
          </TouchableOpacity>

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
            <Text>Keto Recipes</Text>
          </View>
          
          <FlatList
            data={recipes}
            renderItem={this.renderCard}
            horizontal={true}
            style={{padding: 10}}
          />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.00,
    elevation: 24,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    width: (width - 20),
    height: (width/2 - 10),
    borderRadius: 8,
    padding: 5,
    alignSelf: 'center'
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 8,
    width: (width - 30),
    height: (width/2 - 50),
  }
});