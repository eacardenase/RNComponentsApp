import { StyleSheet } from 'react-native';
import { Button, Card, CustomView } from '../../components';

export const SwitchScreen = () => {
  return (
    <CustomView style={styles.container}>
      <Card>
        <Button text="Click me" />
      </Card>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 10,
  },
});
