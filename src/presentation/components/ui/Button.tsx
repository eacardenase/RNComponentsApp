import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { COLORS, GLOBAL_STYLES } from '../../../config/theme';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = ({ text, style, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        GLOBAL_STYLES.primaryButton,
        {
          opacity: pressed ? 0.8 : 1,
          ...styles.button,
        },
      ]}
    >
      <Text style={[GLOBAL_STYLES.primaryButtonText, styles.text, style]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.buttonTextColor,
  },
});
