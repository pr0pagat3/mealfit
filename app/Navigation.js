import React from 'react';
import { View, Modal, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Text, NavigationBar, ListView, ImageBackground, Tile, Title, Subtitle, Divider, Examples, Card, Image, Caption, TouchableOpacity, Row } from '@shoutem/ui';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Badge } from 'react-native-elements';

//Onboarding Screens
import IdentificationView from './containers/onboarding/IdentificationView';
import MeasurementView from './containers/onboarding/MeasurementView';
import ActivityLevelView from './containers/onboarding/ActivityLevelView';
import MainGoalView from './containers/onboarding/MainGoalView';
import WeeklyActivityView from './containers/onboarding/WeeklyActivityView';
import GoalWeightView from './containers/onboarding/GoalWeightView';

//Main App Screens
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import CommunityScreen from './screens/CommunityScreen';
import StatsScreen from './screens/StatsScreen';
import RecipeScreen from './screens/RecipeScreen';
import RecipeFilterModal from './screens/RecipeFilterModal';
import GroceryListModal from './screens/GroceryListModal';
import DailyStatsScreen from './screens/DailyStatsScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen';
import BodyStatsView from './screens/BodyStatsView';
import SettingsView from './screens/SettingsView';
import FavouritesView from './screens/FavouritesView';

const OnboardingNavigator = createStackNavigator(
  {
    IdentificationView: { screen: IdentificationView },
    MeasurementView: { screen: MeasurementView },
    ActivityLevelView: { screen: ActivityLevelView },
    MainGoalView: { screen: MainGoalView },
    WeeklyActivityView: { screen: WeeklyActivityView },
    GoalWeightView: { screen: GoalWeightView },

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
  },
  {  headerMode: 'none' }
);

const CommunityStack = createStackNavigator({
  Community: { screen: CommunityScreen },
  Recipe: { screen: RecipeScreen },
  },
  {  headerMode: 'none' }
);

const StatsStack = createStackNavigator({
  Stats: { screen: StatsScreen },
  PersonalInfo: { screen: PersonalInfoScreen },
  // BodyStats: { screen: BodyStatsView },
  Settings: { screen: SettingsView },
  Favourites: { screen: FavouritesView },
  },
  {  headerMode: 'none' }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Food: { screen: FoodStack },
    Action: { screen: () => null },
    Community: { screen: CommunityStack },
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
        else if (routeName === 'Community') {
          iconName = `forum`;
        }
        else if (routeName === 'Stats') {
          iconName = `account-outline`;
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
  Onboarding: OnboardingNavigator,
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
    AppNavigator: { screen: AppNavigator },
    GroceryListModal: { screen: GroceryListModal },
    RecipeFilterModal: { screen: RecipeFilterModal },
    BodyStatsModal: { screen: BodyStatsView },
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
