import React from 'react';
import {View} from 'react-native';
import {Typography} from '@common/components/Typography';
import {TextField} from '@common/components/Input/TextField';
import {Gap} from '@common/components/Gap';
import {AppButton} from '@common/components/Button/AppButton';
import styles from './style';

type props = {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

export const PhoneOrEmail = ({value, onChange, onSubmit, isLoading}: props) => {
  return (
    <View style={styles.content}>
      <View style={styles.heading}>
        <Typography variant="title" size="xl" style={styles.headingText}>
          Login
        </Typography>
      </View>
      <Gap gap={20}>
        <Gap gap={10}>
          <TextField
            inputMode="email"
            autoComplete="email"
            value={value}
            onChangeText={onChange}
            label="Lets start with your Phone/email"
          />
          <Typography variant="body" size="sm">
            Note. Guests from outside, Kindly use email address
          </Typography>
        </Gap>
        <AppButton
          disabled={isLoading}
          onPress={onSubmit}
          title="Submit"
          isLoading={isLoading}
        />
      </Gap>
    </View>
  );
};
