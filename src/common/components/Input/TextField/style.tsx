import {THEME} from '@common/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  input: {
    minHeight: 50,
    borderColor: THEME.components.textField.input.border,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  },
});

export default styles;
