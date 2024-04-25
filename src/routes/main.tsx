import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/Home';
import {ROUTES} from '@common/constants/routes';
const Stack = createStackNavigator();

export const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.home.main}>
      <Stack.Screen
        name={ROUTES.home.main}
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
