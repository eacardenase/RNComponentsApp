import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../config/theme';

export const Animation101Screen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.purpleBox]} />

      <Pressable>
        <Text style={styles.button}>EaseIn</Text>
      </Pressable>

      <Pressable>
        <Text style={styles.button}>EaseOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
    backgroundColor: COLORS.primary,
  },
  button: {
    marginTop: 10,
  },
});
