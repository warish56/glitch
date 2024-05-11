import {THEME} from '@common/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
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
  backgroundImg: {
    backgroundColor: THEME.colors.background.white,
    display: 'flex',
    flex: 1,
  },
});

export default styles;
