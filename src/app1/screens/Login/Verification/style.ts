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
    padding: 10,
    gap: 15,
    paddingLeft: 0,
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optInput: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  retryArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});

export default styles;
