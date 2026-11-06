import { StyleSheet } from 'react-native';
import { Card, CustomSwitch, CustomView } from '../../components';
import { useState } from 'react';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prevState => !prevState);

  return (
    <CustomView style={styles.container}>
      <Card>
        <CustomSwitch
          isOn={isEnabled}
          text="Encendido"
          onChange={toggleSwitch}
        />
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
