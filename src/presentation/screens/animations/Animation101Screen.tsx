import { useRef } from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from '../../../config/theme';

export const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.elastic(5),
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => console.log('DEBUG: Animation ended.'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />

      <Pressable onPress={fadeIn}>
        <Text style={styles.button}>FadeIn</Text>
      </Pressable>

      <Pressable onPress={fadeOut}>
        <Text style={styles.button}>FadeOut</Text>
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
