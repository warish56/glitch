import React from 'react';
import {HomeScreen} from '@app1Screens/Home';
import {ROUTES} from '@common/constants/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageSourcePropType} from 'react-native';
import {EventsScreen} from '@app1Screens/Events';
import {SpecificEventScreen} from '@app1Screens/SpecificEvent';
import {ProfileScreen} from '@app1Screens/Profile';

const homeImg = require('@common/assets/home.png');
const chatImg = require('@common/assets/chat.png');
const feedImg = require('@common/assets/pic.png');
const profileImg = require('@common/assets/profile.jpeg');

const Tab = createBottomTabNavigator();

const getTabImage =
  (image: ImageSourcePropType) =>
  ({size}: {size: number}) => {
    return <Image style={{width: size, height: size}} source={image} />;
  };

const getHomeImage = getTabImage(homeImg);
const getEventsImage = getTabImage(chatImg);
const getEventImage = getTabImage(feedImg);
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
        name={ROUTES.main.events}
        options={{
          title: 'Events',
          tabBarLabel: 'Events',
          tabBarIcon: getEventsImage,
        }}
        component={EventsScreen}
      />

      <Tab.Screen
        name={ROUTES.main.event}
        options={{
          title: 'Event',
          tabBarLabel: 'Event',
          tabBarIcon: getEventImage,
        }}
        component={SpecificEventScreen}
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
