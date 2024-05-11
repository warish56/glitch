import React, {ComponentProps} from 'react';
import {BaseButton} from './BaseButton';
import {Typography} from '../Typography';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});

type props = {
  title: string;
  textProps: Omit<ComponentProps<typeof Typography>, 'children'>;
};
export const TextButton = ({title, textProps}: props) => {
  return (
    <BaseButton style={styles.container}>
      <Typography {...textProps}>{title}</Typography>
    </BaseButton>
  );
};
