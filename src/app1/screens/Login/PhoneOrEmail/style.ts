import {THEME} from '@common/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderColor: THEME.colors.primary,
    borderWidth: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    display: 'flex',
    padding: 20,
    paddingLeft: 0,
  },
  headingText: {
    fontWeight: 700,
  },
});

export default styles;
