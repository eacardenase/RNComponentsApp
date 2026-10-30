import { createStaticNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import { Animation101Screen, HomeScreen } from '../screens';

const StackNavigator = createStackNavigator({
  screens: {
    HomeScreen: createStackScreen({
      screen: HomeScreen,
    }),
    Animation101Screen: createStackScreen({
      screen: Animation101Screen,
    }),
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigator = createStaticNavigation(StackNavigator);
