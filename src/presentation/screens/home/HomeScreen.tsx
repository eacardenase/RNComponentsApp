import { ScrollView, View } from 'react-native';
import { GLOBAL_STYLES } from '../../../config/theme';
import { MenuItemProps, MenuItemSection, Title } from '../../components';

const animationMenuItems: MenuItemProps[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

const menuItems: MenuItemProps[] = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems: MenuItemProps[] = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <View style={GLOBAL_STYLES.mainContainer}>
      <View style={GLOBAL_STYLES.globalMargin}>
        <ScrollView>
          <Title text="Menu Options" safe />

          <MenuItemSection items={animationMenuItems} />
          <MenuItemSection items={menuItems} />
          <MenuItemSection items={uiMenuItems} />
        </ScrollView>
      </View>
    </View>
  );
};
