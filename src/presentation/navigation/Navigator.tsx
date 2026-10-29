import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
