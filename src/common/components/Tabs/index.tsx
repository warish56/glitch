import React, {Fragment} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TabsProvider, useTabContext} from './context';
import {useComponentsStyle} from '@common/hooks/useComponentStyles';
import {THEME} from '@common/theme';

const styles = StyleSheet.create({
  wapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: THEME.components.tabsGroup.backgroundColor,
  },
  tab: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: THEME.components.tabsGroup.text.size,
    color: THEME.components.tabsGroup.text.color,
  },
});

type tabsProps = {
  tabs: Omit<tabProps, 'onPress' | 'active'>[];
};

type tabProps = {
  id: string;
  title: string;
  onPress: () => void;
  active: boolean;
  style?: Record<string, string | number>;
  textStyle?: Record<string, string | number>;
  activeStyle?: Record<string, string | number>;
  activeTextStyle?: Record<string, string | number>;
};

const Tab = ({
  title,
  active,
  onPress,
  style,
  activeStyle,
  textStyle,
  activeTextStyle,
}: tabProps) => {
  const currentActiveStyle = {
    borderBottomColor: THEME.components.tabsGroup.active.borderColor,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    ...activeStyle,
  };
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.tab,
        ...(style || {}),
        ...(active ? currentActiveStyle : {}),
      }}>
      <Text
        style={{
          ...styles.tabText,
          ...(textStyle || {}),
          ...(active ? activeTextStyle : {}),
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export const TabsHeader = ({tabs}: tabsProps) => {
  const {currentTabId, setTab} = useTabContext();
  const {data} = useComponentsStyle({isMock: true});
  const serverContainerStyle = data?.data.tabsGroup.wrapper.style;
  const serverTabStyle = data?.data.tabsGroup.btn;
  const serverTabTextStyle = data?.data.tabsGroup.text;

  return (
    <View
      style={{
        ...styles.wapper,
        ...(serverContainerStyle || {}),
      }}>
      {tabs.map(tabData => {
        return (
          <Tab
            id={tabData.id}
            onPress={() => setTab(tabData.id)}
            key={tabData.id}
            title={tabData.title}
            active={currentTabId === tabData.id}
            style={serverTabStyle?.style || {}}
            activeStyle={serverTabStyle?.activeStyle || {}}
            textStyle={serverTabTextStyle?.style || {}}
            activeTextStyle={serverTabTextStyle?.activeStyle || {}}
          />
        );
      })}
    </View>
  );
};

type childProps = {
  id: string;
  children: React.ReactNode;
};
export const TabChild = ({id, children}: childProps) => {
  const {currentTabId} = useTabContext();
  if (currentTabId !== id) {
    return null;
  }
  return <Fragment>{children}</Fragment>;
};

export const TabsWrapper = TabsProvider;
