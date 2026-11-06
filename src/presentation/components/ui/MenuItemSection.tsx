import { StyleSheet, View } from 'react-native';
import { MenuItem, MenuItemProps, Separator } from '..';
import { COLORS } from '../../../config/theme';
import React from 'react';

interface Props {
  items: MenuItemProps[];
}

export const MenuItemSection = ({ items }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <React.Fragment key={item.component}>
          <MenuItem {...item} />

          {index < items.length - 1 && <Separator />}
        </React.Fragment>
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
