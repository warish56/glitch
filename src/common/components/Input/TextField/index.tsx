import React, {ForwardedRef} from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import {Typography} from '@common/components/Typography';
import styles from './style';
import {THEME} from '@common/theme';

type props = {
  label?: string;
} & TextInputProps;

export const TextField = React.forwardRef(
  ({label, ...rest}: props, ref: ForwardedRef<TextInput>) => {
    return (
      <View style={styles.container}>
        {label ? (
          <Typography
            style={{
              fontSize: THEME.components.textField.label.size,
              color: THEME.components.textField.label.color,
            }}>
            {label}
          </Typography>
        ) : null}
        <TextInput
          ref={ref}
          {...rest}
          style={{
            ...styles.input,
            ...((rest.style as {}) || {}),
          }}
        />
      </View>
    );
  },
);
