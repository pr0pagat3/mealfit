import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

//Onboarding Screens
import IdentificationView from './containers/onboarding/IdentificationView';
import MeasurementView from './containers/onboarding/MeasurementView';
import ActivityLevelView from './containers/onboarding/ActivityLevelView';
import MainGoalView from './containers/onboarding/MainGoalView';
import WeeklyActivityView from './containers/onboarding/WeeklyActivityView';
import GoalWeightView from './containers/onboarding/GoalWeightView';
import SuccessView from './containers/onboarding/SuccessView';

//Modals
import BirthdayModal from './containers/modals/BirthdayModal';

//Main App Screens
import HomeScreen from './containers/main/HomeScreen';
import FoodScreen from './containers/main/FoodScreen';
import CommunityScreen from './containers/main/community';
import StatsScreen from './containers/main/StatsScreen';
import RecipeScreen from './containers/main/RecipeScreen';
import RecipeFilterModal from './containers/main/RecipeFilterModal';
import GroceryListModal from './containers/main/GroceryListModal';
import DailyStatsScreen from './containers/main/DailyStatsScreen';
import PersonalInfoScreen from './containers/main/PersonalInfoScreen';
import BodyStatsView from './containers/main/BodyStatsView';
import SettingsView from './containers/main/SettingsView';
import FavouritesView from './containers/main/FavouritesView';

const OnboardingNavigator = createStackNavigator(
  {
    // IdentificationView: { screen: IdentificationView },
    // MeasurementView: { screen: MeasurementView },
    // ActivityLevelView: { screen: ActivityLevelView },
    // MainGoalView: { screen: MainGoalView },
    // WeeklyActivityView: { screen: WeeklyActivityView },
    // GoalWeightView: { screen: GoalWeightView },
    SuccessView: { screen: SuccessView },
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
          iconName = `heart-multiple`;
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
  Onboarding: OnboardingNavigator,
  Main: TabNavigator,
});

const RootStack = createStackNavigator(
  {
    AppNavigator: { screen: AppNavigator },
    GroceryListModal: { screen: GroceryListModal },
    RecipeFilterModal: { screen: RecipeFilterModal },
    BodyStatsModal: { screen: BodyStatsView },
    BirthdayModal: { screen: BirthdayModal },
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
