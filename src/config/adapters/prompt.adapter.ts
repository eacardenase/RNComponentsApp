import { Alert } from 'react-native';

interface Options {
  title: string;
  message: string;
  callback: (text: string) => void;
}

export const showPrompt = ({ title, message, callback }: Options) => {
  Alert.prompt(title, message, callback);
};
