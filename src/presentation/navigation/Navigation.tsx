import { createStaticNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import { HomeScreen } from '../screens';

const StackNavigator = createStackNavigator({
  screens: {
    Home: createStackScreen({
      screen: HomeScreen,
    }),
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigator = createStaticNavigation(StackNavigator);
