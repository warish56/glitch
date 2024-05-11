import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

type props = {
  children: React.ReactNode;
  gap: number;
};

export const Gap = ({children, gap}: props) => {
  return (
    <View
      style={{
        ...styles.container,
        gap,
      }}>
      {children}
    </View>
  );
};
