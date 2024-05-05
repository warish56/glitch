import {useComponentsStyle} from '@common/hooks/useComponentStyles';
import {THEME} from '@common/theme';
import {serverStyle} from '@common/types/styles';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    backgroundColor: 'burlywood',
  },
  item: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.components.filterBtn.backgroundColor,
  },
  itemText: {
    fontSize: THEME.components.filterBtn.text.size,
    color: THEME.components.filterBtn.text.color,
  },
  activeItem: {
    backgroundColor: THEME.components.filterBtn.active.backgroundColor,
  },
  activeItemText: {
    color: THEME.components.filterBtn.active.text.color,
    //fontWeight: 'bold'
  },
});

type listProps = {
  active: string;
  items: Omit<itemProps, 'onPress' | 'isActive'>[];
  onPress: (id: string) => void;
};
export const FilterList = ({active, items, onPress}: listProps) => {
  const {data} = useComponentsStyle({isMock: true});
  const serverContainerStyle = data?.data.filterList.wrapper.style;
  const serverFilterStyle = data?.data.filterList.btn;
  const serverFilterTextStyle = data?.data.filterList.text;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          ...styles.container,
          ...(serverContainerStyle || {}),
        }}>
        {items.map(item => {
          return (
            <FilterList.item
              style={serverFilterStyle?.style}
              activeStyle={serverFilterStyle?.activeStyle}
              textStyle={serverFilterTextStyle?.style}
              activeTextStyle={serverFilterTextStyle?.activeStyle}
              isActive={active === item.id}
              onPress={onPress}
              key={item.id}
              {...item}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

type itemProps = {
  isActive: boolean;
  id: string;
  title: string;
  style?: serverStyle;
  textStyle?: serverStyle;
  activeStyle?: serverStyle;
  activeTextStyle?: serverStyle;
  onPress: (id: string) => void;
};

FilterList.item = ({
  id,
  onPress,
  isActive,
  activeStyle,
  activeTextStyle,
  title,
  style = {},
  textStyle = {},
}: itemProps) => {
  const activeContStyle = isActive ? activeStyle || styles.activeItem : {};
  const activeValueStyle = isActive
    ? activeTextStyle || styles.activeItemText
    : {};

  return (
    <Pressable
      onPress={() => onPress(id)}
      style={{
        ...styles.item,
        ...style,
        ...activeContStyle,
      }}>
      <Text
        style={{
          ...styles.itemText,
          ...textStyle,
          ...activeValueStyle,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};
