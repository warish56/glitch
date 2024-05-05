import React from 'react';
import {StyleSheet, View} from 'react-native';

type props = {
  children: React.ReactNode;
  style: Record<string, string | number>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
});

export const Column = ({children, style}: props) => {
  return (
    <View
      style={{
        ...style,
        ...styles.container,
      }}>
      {children}
    </View>
  );
};
