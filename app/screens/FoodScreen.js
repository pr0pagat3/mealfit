import React from 'react';
import { View, Platform, Modal, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DropDownMenu, Button, Text, ListView, ImageBackground, Tile, Title, Subtitle, Divider, Examples, Card, Image, Caption, TouchableOpacity, Row } from '@shoutem/ui';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Badge } from 'react-native-elements';
import restaurants from '../recipes';

export default class FoodScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Food',
      headerStyle: {
        backgroundColor: '#232b2b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button onPress={() => navigation.navigate('RecipeFilterModal')} styleName="clear">
          <Icon color='#fff' size={25} name="filter" />
        </Button>
      ),
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants,
      cars: [
      {
        brand: "Filter",
        models:
          {
            model: "Audi R8",
            image: {
              url: "https://shoutem.github.io/img/ui-toolkit/dropdownmenu/Audi-R8.jpg"
            },
            description: "Exclusively designed by Audi AG's "
            + "private subsidiary company, Audi Sport GmbH."
          }
      },
      {
        brand: "Bugatti",
        models: {
          model: "Chiron",
          image: {
            url: "https://shoutem.github.io/img/ui-toolkit/dropdownmenu/Chiron.jpg"
          },
          description: "Bugatti premiered the Bugatti "
            + "Chiron as a successor to the Veyron."
        }
      },
      {
        brand: "Chrysler",
        models: {
          model: "Dodge Viper",
          image: {
            url: "https://shoutem.github.io/img/ui-toolkit/dropdownmenu/Dodge-Viper.jpg"
          },
          description: "The Dodge Viper is a super car "
            + "manufactured by Dodge (SRT for 2013 and 2014)."
        }
      },
    ],
    }

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(restaurant) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.push('Recipe')}>
        <Row>
          <Image style={{width:90, height:70}} source={{ uri: restaurant.image && restaurant.image.url }} />
          <Tile styleName="vertical">
            <Subtitle>{restaurant.name}</Subtitle>
            <Caption>{restaurant.address}</Caption>
            <View style={{flexDirection: 'row'}}>
              <Badge value={`cals ${restaurant.calories}`}/>
              <Badge value={`p ${restaurant.protein}`} containerStyle={{ backgroundColor: '#fbc3ca'}}/>
              <Badge value={`f ${restaurant.fat}`} containerStyle={{ backgroundColor: '#fbf4c3'}}/>
              <Badge value={`c ${restaurant.carbs}`} containerStyle={{ backgroundColor: '#89c4fa'}}/>
            </View>
          </Tile>
        </Row>
        <Divider styleName='line'/>
      </TouchableOpacity>
    );
  }

  render() {
    const restaurants = this.state.restaurants;
        const selectedCar = this.state.selectedCar || this.state.cars[0];

    return (
      <View style={{ flex: 1 }}>
      <DropDownMenu
        styleName="horizontal"
        options={this.state.cars}
        selectedOption={selectedCar ? selectedCar : this.state.cars[0]}
        onOptionSelected={(car) => this.setState({ selectedCar: car })}
        titleProperty="brand"
        valueProperty="cars.model"
      />
        <ListView
          data={restaurants}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
