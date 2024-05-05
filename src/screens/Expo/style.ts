import {THEME} from '@common/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flexGrow: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },

  listContainer: {
    padding: 10,
    flexGrow: 1,
    height: 1,
    overflow: 'scroll',
    width: '100%',
    backgroundColor: THEME.colors.background.screen,
    flexDirection: 'row',
  },

  scrollContainer: {
    gap: 10,
  },

  cardContainer: {
    display: 'flex',
    width: '100%',
    height: 200,
    flexDirection: 'row',
    borderColor: 'orange',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderRadius: 8,
  },

  imageContainer: {
    flexBasis: '40%',
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  image: {
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  cardContent: {
    padding: 10,
    flexBasis: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
  },

  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  descContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    color: THEME.colors.textDark,
    flexGrow: 1,
    gap: 10,
    alignItems: 'stretch',
  },

  title: {
    fontSize: THEME.fontSize.title.sm,
    borderColor: 'red',
  },
  body: {
    fontSize: THEME.fontSize.body.md,
    maxWidth: '90%',
    lineHeight: 20,
  },
});

export default styles;
