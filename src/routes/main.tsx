import React from 'react';
import {HomeScreen} from '@screens/Home';
import {ROUTES} from '@common/constants/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageSourcePropType} from 'react-native';
// import homeSvg from '@common/assets/home.svg';
import {ChatScreen} from '@screens/Chat';
import {FeedScreen} from '@screens/Feed';
import {InfoScreen} from '@screens/Info';
import {ProfileScreen} from '@screens/Profile';

const homeImg = require('@common/assets/home.png');
const chatImg = require('@common/assets/chat.png');
const feedImg = require('@common/assets/pic.png');
const infoImg = require('@common/assets/info.png');
const profileImg = require('@common/assets/profile.jpeg');

const Tab = createBottomTabNavigator();

const getTabImage =
  (image: ImageSourcePropType) =>
  ({size}: {size: number}) => {
    return <Image style={{width: size, height: size}} source={image} />;
  };

const getHomeImage = getTabImage(homeImg);
const getChatImage = getTabImage(chatImg);
const getFeedImage = getTabImage(feedImg);
const getInfoImage = getTabImage(infoImg);
const getProfileImage = getTabImage(profileImg);

export const MainRoutes = () => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.main.home}>
      <Tab.Screen
        name={ROUTES.main.home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: getHomeImage,
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name={ROUTES.main.chat}
        options={{
          title: 'Chat',
          tabBarLabel: 'Chat',
          tabBarIcon: getChatImage,
        }}
        component={ChatScreen}
      />

      <Tab.Screen
        name={ROUTES.main.feed}
        options={{
          title: 'Feed',
          tabBarLabel: 'Feed',
          tabBarIcon: getFeedImage,
        }}
        component={FeedScreen}
      />

      <Tab.Screen
        name={ROUTES.main.info}
        options={{
          title: 'Info',
          tabBarLabel: 'Info',
          tabBarIcon: getInfoImage,
        }}
        component={InfoScreen}
      />

      <Tab.Screen
        name={ROUTES.main.profile}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: getProfileImage,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
