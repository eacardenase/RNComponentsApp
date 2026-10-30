import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { createStaticNavigation } from '@react-navigation/native';

const StackNavigator = createStackNavigator({
  screens: {
    Home: createStackScreen({
      screen: HomeScreen,
    }),
  },
});

export const Navigator = createStaticNavigation(StackNavigator);
