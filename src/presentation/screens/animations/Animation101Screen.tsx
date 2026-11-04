import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from '../../../config/theme';
import { useAnimation } from '../../hooks';

export const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startFromTop } =
    useAnimation();

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

      <Pressable
        onPress={() => {
          fadeIn();
          startFromTop({ initialPosition: -100, easing: Easing.bounce });
        }}
      >
        <Text style={styles.button}>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut()}>
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
