import {THEME} from '@common/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type props = {
  title: string;
  style?: Record<string, string | number>;
  textStyle?: Record<string, string | number>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom: 8,
    width: 'auto',
    borderRadius: 8,
    backgroundColor: THEME.components.chip.backgroundColor,
  },
  text: {
    fontSize: THEME.components.chip.text.size,
    color: THEME.components.chip.text.color,
  },
});

export const Chip = ({title, style, textStyle}: props) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(style || {}),
      }}>
      <Text
        style={{
          ...styles.text,
          ...(textStyle || {}),
        }}>
        {title}
      </Text>
    </View>
  );
};
