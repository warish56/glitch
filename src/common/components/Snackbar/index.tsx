import React, {useMemo} from 'react';
import {useSnackbar} from '@common/hooks/useSnackbar';
import {StyleSheet, View} from 'react-native';
import {THEME} from '@common/theme';
import {Typography} from '../Typography';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 5,
    right: 5,
    padding: 10,
    borderRadius: 8,
  },
});

export const Snackbar = () => {
  const {message, type} = useSnackbar();

  const bgColor = useMemo(() => {
    switch (type) {
      case 'error':
        return THEME.components.snackbar.error;
      case 'info':
        return THEME.components.snackbar.info;
      case 'success':
        return THEME.components.snackbar.success;
      case 'warning':
        return THEME.components.snackbar.warning;
      default:
        return THEME.colors.textDark;
    }
  }, [type]);

  if (!message) {
    return null;
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor,
      }}>
      <Typography
        style={{
          fontSize: THEME.components.snackbar.size,
          color: THEME.components.snackbar.color,
        }}>
        {message}
      </Typography>
    </View>
  );
};
