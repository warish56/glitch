/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Typography} from '@common/components/Typography';
import {THEME} from '@common/theme';
import {BaseButton} from './BaseButton';
import {ActivityIndicator, PressableProps, StyleSheet} from 'react-native';

type props = {
  title: string;
  fullWidth?: boolean;
  isLoading?: boolean;
} & PressableProps;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: THEME.components.button.main.background,
  },
  text: {
    fontSize: THEME.components.button.main.size,
    color: THEME.components.button.main.color,
    fontWeight: 700,
  },
});

export const AppButton = ({
  title,
  fullWidth = false,
  isLoading = false,
  ...rest
}: props) => {
  return (
    <BaseButton
      style={{
        width: fullWidth ? '100%' : 'auto',
        ...styles.btn,
      }}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color={THEME.colors.tertiary} />
      ) : (
        <Typography style={styles.text}>{title}</Typography>
      )}
    </BaseButton>
  );
};
