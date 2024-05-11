import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '@common/constants/routes';
import {LoginScreen} from '@app1Screens/Login';

const Stack = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.auth.login}>
      <Stack.Screen
        name={ROUTES.auth.login}
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
