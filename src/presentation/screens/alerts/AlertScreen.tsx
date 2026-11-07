import { Alert, StyleSheet } from 'react-native';
import { GLOBAL_STYLES } from '../../../config/theme';
import { Button, CustomView, Title } from '../../components';

export const AlertScreen = () => {
  const createTwoButtonAlert = () => {
    Alert.alert(
      'Alert title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('DEBUG: Cancel');
          },
          style: 'cancel',
          isPreferred: true,
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('DEBUG: OK');
          },
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log('DEBUG: onDismiss');
        },
      },
    );
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Alert title', 'My Alert Msg', [
      {
        text: 'OK',
        onPress: () => {},
        isPreferred: true,
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'destructive',
      },
      {
        text: 'Ask me later',
        onPress: () => {},
      },
    ]);
  };

  return (
    <CustomView style={[GLOBAL_STYLES.globalMargin, styles.container]}>
      <Title text="Alerts" safe />

      <Button text="Alert - 2 Buttons" onPress={createTwoButtonAlert} />

      <Button text="Alert - 3 Buttons" onPress={createThreeButtonAlert} />

      <Button text="Prompt - Input" />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
