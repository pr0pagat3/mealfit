import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Heading, Overlay, Text, ListView, ImageBackground, Tile, Title, Subtitle, Divider, Examples, Card, Image, Caption, TouchableOpacity, Row } from '@shoutem/ui';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Badge } from 'react-native-elements';
import restaurants from '../recipes';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color="blue" />
);

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'MealFit',
      headerStyle: {
        backgroundColor: '#232b2b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button onPress={() => navigation.navigate('GroceryListModal')} styleName="clear">
          <Icon color='#fff' size={25} name="basket" />
        </Button>
      ),
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants
    }
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(restaurant) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.push('Recipe')}>
        <Tile>
          <ImageBackground
            styleName="large-banner"
            source={{ uri: restaurant.image.url }}
          >
          </ImageBackground>
          <View styleName="content" style={{padding: 10}}>
            <Title>{restaurant.name}</Title>
            <View styleName="horizontal space-between">
              <Caption>1 hour ago</Caption>
              <Caption>15:34</Caption>
            </View>
          </View>
        </Tile>
        <Divider styleName="section-header" />
    </TouchableOpacity>
    );
  }

  render() {
    const { restaurants } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#f5f2f0' }}>
        <ListView
          data={restaurants}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
