import { Alert } from 'react-native';

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

interface Options {
  title: string;
  message: string;
  buttons: PromptButton[];
  type?: 'default' | 'plain-text' | 'secure-text' | 'login-password';
}

export const showPrompt = ({
  title,
  message,
  buttons,
  type = 'default',
}: Options) => {
  Alert.prompt(title, message, buttons, type);
};
