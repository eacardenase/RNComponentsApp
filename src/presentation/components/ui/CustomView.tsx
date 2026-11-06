import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { GLOBAL_STYLES } from '../../../config/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const CustomView = ({ style, children }: Props) => {
  return <View style={[GLOBAL_STYLES.mainContainer, style]}>{children}</View>;
};
