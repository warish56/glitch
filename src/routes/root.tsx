import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '@common/constants/routes';
import {AuthRoutes} from './auth';
import {useToken} from '@common/hooks/useToken';
import {InitScreen} from '@screens/Init';
const Stack = createStackNavigator();

export const MainRoutes = () => {
  const {token} = useToken();
  return (
    <Stack.Navigator initialRouteName={ROUTES.init.BASE_STACK_URL}>
      <Stack.Screen
        name={ROUTES.init.BASE_STACK_URL}
        options={{
          headerShown: false,
        }}
        component={InitScreen}
      />
      <Stack.Screen
        name={ROUTES.auth.BASE_STACK_URL}
        options={{
          headerShown: false,
        }}
        component={AuthRoutes}
      />
      {token ? (
        <Stack.Screen
          name={ROUTES.home.BASE_STACK_URL}
          options={{
            headerShown: false,
          }}
          component={MainRoutes}
        />
      ) : null}
    </Stack.Navigator>
  );
};
