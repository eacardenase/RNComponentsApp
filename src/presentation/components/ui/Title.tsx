import { Text } from 'react-native';
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

  return (
    <Text style={{ ...GLOBAL_STYLES.title, marginTop, color }}>{text}</Text>
  );
};
