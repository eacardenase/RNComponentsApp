import { createStaticNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  SwitchScreen,
} from '../screens';

const StackNavigator = createStackNavigator({
  screens: {
    HomeScreen: createStackScreen({
      screen: HomeScreen,
    }),
    Animation101Screen: createStackScreen({
      screen: Animation101Screen,
    }),
    Animation102Screen: createStackScreen({
      screen: Animation102Screen,
    }),
    SwitchScreen: createStackScreen({
      screen: SwitchScreen,
    }),
    AlertScreen: createStackScreen({
      screen: AlertScreen,
    }),
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigator = createStaticNavigation(StackNavigator);
