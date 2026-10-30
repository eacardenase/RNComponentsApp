import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../config/theme';
import { IonIcon, IonIconName } from '../shared/IonIcon';

export interface MenuItemProps {
  name: string;
  icon: IonIconName;
  component: string;
}

export const MenuItem = ({ name, icon, component }: MenuItemProps) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IonIcon name={icon} size={25} color={COLORS.primary} />
        </View>

        <Text>{name}</Text>

        <View style={styles.arrowContainer}>
          <IonIcon
            name="chevron-forward-outline"
            size={25}
            color={COLORS.primary}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.cardBackground,
  },
  iconContainer: {
    marginRight: 10,
  },
  title: {
    color: COLORS.text,
  },
  arrowContainer: {
    marginLeft: 'auto',
  },
});
