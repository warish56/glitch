import React from 'react';
import {THEME} from '@common/theme';
import {Text, TextStyle} from 'react-native';

type fonts = typeof THEME.fontSize;
type colors = typeof THEME.colors;

type props = {
  children: React.ReactNode;
  variant?: keyof fonts;
  color?: keyof Omit<colors, 'background'>;
  size?: keyof fonts[keyof fonts];
  style?: TextStyle;
};

export const Typography = ({
  children,
  variant = 'title',
  size = 'sm',
  color = 'textDark',
  style,
}: props) => {
  return (
    <Text
      style={{
        fontSize: THEME.fontSize[variant][size],
        color: THEME.colors[color],
        ...(style || {}),
      }}>
      {children}
    </Text>
  );
};
