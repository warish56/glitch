import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '@common/constants/routes';
import {AuthRoutes} from './auth';
import {useToken} from '@common/hooks/useToken';
import {MainRoutes} from './main';
import {InitScreen} from '@app1Screens/Init';
import {StyleSheet, View} from 'react-native';
import {Snackbar} from '@common/components/Snackbar';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
});

type wrapperProps = {
  children: React.ReactNode;
};
const RoutesWrapper = ({children}: wrapperProps) => {
  return (
    <View style={styles.wrapper}>
      {children}
      <Snackbar />
    </View>
  );
};

const Stack = createStackNavigator();

export const RootRoutes = () => {
  const {token} = useToken();
  return (
    <RoutesWrapper>
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
            name={ROUTES.main.BASE_STACK_URL}
            options={{
              headerShown: false,
            }}
            component={MainRoutes}
          />
        ) : null}
      </Stack.Navigator>
    </RoutesWrapper>
  );
};
