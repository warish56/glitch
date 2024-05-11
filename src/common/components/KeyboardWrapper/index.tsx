import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

type props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export const KeyboardWrapper = ({children}: props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </KeyboardAvoidingView>
  );
};
