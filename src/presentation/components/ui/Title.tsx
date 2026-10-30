import { StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, GLOBAL_STYLES } from '../../../config/theme';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({ text, safe = false, white = false }: Props) => {
  const { top } = useSafeAreaInsets();
  const marginTop = safe ? top : 0;
  const color = white ? '#FFF' : COLORS.text;

  return <Text style={{ ...styles.title, marginTop, color }}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...GLOBAL_STYLES.title,
    marginBottom: 10,
  },
});
