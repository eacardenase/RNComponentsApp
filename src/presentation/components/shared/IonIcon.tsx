import Icon, { IoniconsIconName } from '@react-native-vector-icons/ionicons';

interface Props {
  name: IoniconsIconName;
  color?: string;
  size?: number;
}

export const IonIcon = ({ name, color = '#000', size = 30 }: Props) => {
  return <Icon name={name} color={color} size={size} />;
};

export type IonIconName = IoniconsIconName;
