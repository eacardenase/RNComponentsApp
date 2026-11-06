import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../config/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 10,
    padding: 10,
  },
});
