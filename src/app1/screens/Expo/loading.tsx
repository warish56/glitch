import React from 'react';
import {THEME} from '@common/theme';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ScreenLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME.colors.primary} />
    </View>
  );
};
