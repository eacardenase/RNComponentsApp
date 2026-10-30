import { StyleSheet, View } from 'react-native';
import { MenuItem, MenuItemProps } from '..';
import { COLORS } from '../../../config/theme';

interface Props {
  items: MenuItemProps[];
}

export const MenuItemSection = ({ items }: Props) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <MenuItem key={item.component} {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: COLORS.cardBackground,
    paddingVertical: 10,
    marginBottom: 15,
  },
});
