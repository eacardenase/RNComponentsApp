import { StyleSheet, Switch, Text, View } from 'react-native';
import { COLORS } from '../../../config/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, text, onChange }: Props) => {
  return (
    <View style={styles.switchRow}>
      {text && <Text>{text}</Text>}

      <Switch value={isOn} onValueChange={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    color: COLORS.text,
  },
});
