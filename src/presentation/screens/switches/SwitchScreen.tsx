import { StyleSheet } from 'react-native';
import { Card, CustomSwitch, CustomView } from '../../components';
import { useState } from 'react';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={styles.container}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          text="Active"
          onChange={value => setState({ ...state, isActive: value })}
        />

        <CustomSwitch
          isOn={state.isHungry}
          text="Hungry"
          onChange={value => setState({ ...state, isHungry: value })}
        />

        <CustomSwitch
          isOn={state.isHappy}
          text="Happy"
          onChange={value => setState(prev => ({ ...prev, isHappy: value }))}
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
