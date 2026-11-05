import { StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#61dafb',
    borderRadius: 8,
  },
});
