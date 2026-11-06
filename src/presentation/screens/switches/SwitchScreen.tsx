import { StyleSheet, Text } from 'react-native';
import { Card, CustomView } from '../../components';

export const SwitchScreen = () => {
  return (
    <CustomView style={styles.container}>
      <Card>
        <Text>SwitchScreen</Text>
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
