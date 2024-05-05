import React from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';

type props = {
  title: string;
  style: Record<string, string | number>;
  textStyle: Record<string, string | number>;
  onPress?: (e: GestureResponderEvent) => void;
};

export const Button = ({title, style, onPress, textStyle}: props) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};
