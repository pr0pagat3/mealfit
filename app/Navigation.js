import React from 'react';
import { View, Modal, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Text, NavigationBar, ListView, ImageBackground, Tile, Title, Subtitle, Divider, Examples, Card, Image, Caption, TouchableOpacity, Row } from '@shoutem/ui';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Badge } from 'react-native-elements';

import OnboardingStepOneScreen from './containers/onboarding/OnboardingStepOneScreen';
import OnboardingStepTwoScreen from './containers/onboarding/OnboardingStepTwoScreen';
import OnboardingStepThreeScreen from './containers/onboarding/OnboardingStepThreeScreen';
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import PlannerScreen from './screens/PlannerScreen';
import StatsScreen from './screens/StatsScreen';
import RecipeScreen from './screens/RecipeScreen';
import RecipeFilterModal from './screens/RecipeFilterModal';
import GroceryListModal from './screens/GroceryListModal';
import DailyStatsScreen from './screens/DailyStatsScreen';

const OnboardingNavigator = createStackNavigator(
  {
    OnboardingStepOneScreen: { screen: OnboardingStepOneScreen },
    OnboardingStepTwoScreen: { screen: OnboardingStepTwoScreen },
    OnboardingStepThreeScreen: { screen: OnboardingStepThreeScreen },

  },
  {  headerMode: 'none' }
);

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Recipe: { screen: RecipeScreen },
  },
  {  headerMode: 'none' }
);

const FoodStack = createStackNavigator({
  Food: { screen: FoodScreen },
  Recipe: { screen: RecipeScreen },
});

const PlannerStack = createStackNavigator({
  Planner: { screen: PlannerScreen },
  Recipe: { screen: RecipeScreen },
  // Stats: { screen: DailyStatsScreen },
});

const StatsStack = createStackNavigator({
  Stats: { screen: StatsScreen },
  Recipe: { screen: RecipeScreen },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Food: { screen: FoodStack },
    Action: { screen: () => null },
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
        } 
        else if (routeName === 'Food') {
          iconName = `silverware`;
        }
        else if (routeName === 'Action') {
          iconName = `plus`;
        }
        else if (routeName === 'Planner') {
          iconName = `calendar-edit`;
        }
        else if (routeName === 'Stats') {
          iconName = `account`;
        }

        if (routeName === 'Action') {
          return (<TouchableOpacity onPress={() => navigation.navigate('RecipeFilterModal')}><View style={{width: 40, height: 40, backgroundColor: '#01c870', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}><Icon name={iconName} size={25} color='white' /></View></TouchableOpacity>);
        } else {
          return <Icon name={iconName} size={25} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  // Blah: DailyStatsScreen,
  // Onboarding: OnboardingNavigator,
  Main: TabNavigator,
});

// const ModalStackNavigator = createStackNavigator({
//   Main: TabNavigator,
//   ActionNavigator: { screen: AppNavigator }
//   }, {
//     headerMode: 'none',
//     mode:       'modal'
// });

const RootStack = createStackNavigator(
  {
    AppNavigator: {
      screen: AppNavigator,
    },
    GroceryListModal: {
      screen: GroceryListModal,
    },
    RecipeFilterModal: {
      screen: RecipeFilterModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {
      backgroundColor: "transparent",
      opacity: 1
    },
  },
  
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer
