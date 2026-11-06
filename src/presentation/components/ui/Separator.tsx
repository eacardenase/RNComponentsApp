import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../config/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: COLORS.text,
    height: 1,
    marginVertical: 9,
    opacity: 0.1,
    width: '95%',
  },
});
