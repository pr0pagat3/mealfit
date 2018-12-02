import React from 'react';
import { View, Modal, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Text, ListView, ImageBackground, Tile, Title, Subtitle, Divider, Examples, Card, Image, Caption, TouchableOpacity, Row } from '@shoutem/ui';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Badge } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import PlannerScreen from './screens/PlannerScreen';
import StatsScreen from './screens/StatsScreen';

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        ><Text style={{ fontSize: 30 }}>This is a modal!</Text></Button>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const FoodStack = createStackNavigator({
  Food: { screen: FoodScreen },
  MyModal: { screen: ModalScreen },
});

const PlannerStack = createStackNavigator({
  Planner: { screen: PlannerScreen },
});

const StatsStack = createStackNavigator({
  Stats: { screen: StatsScreen },
});

const MainNavigator = createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Food: { screen: FoodStack },
    Planner: { screen: PlannerStack },
    Stats: { screen: StatsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Food') {
          iconName = `silverware`;
        }
        else if (routeName === 'Planner') {
          iconName = `calendar-edit`;
        }
        else if (routeName === 'Stats') {
          iconName = `account`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));

export default MainNavigator
