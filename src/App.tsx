import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
