import { StyleSheet } from 'react-native';

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

export const COLORS: ThemeColors = {
  primary: '#5856D6',
  text: '#000000',
  background: '#F3F2F7',
  cardBackground: '#FFFFFF',
  buttonTextColor: '#FFFFFF',
};

export const GLOBAL_STYLES = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: COLORS.text,
    fontSize: 16,
  },
});
