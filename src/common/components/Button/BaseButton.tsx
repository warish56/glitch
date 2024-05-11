import React from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

type props = {
  children: React.ReactNode;
} & PressableProps;

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  container: {
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const BaseButton = ({children, ...rest}: props) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => ({
        ...styles.wrapper,
        opacity: pressed ? 0.7 : 1,
      })}>
      <View
        style={{
          ...styles.container,
          ...((rest.style as {}) || {}),
        }}>
        {children}
      </View>
    </Pressable>
  );
};
