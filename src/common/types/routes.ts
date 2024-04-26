import {AppRouteType, ROUTES} from '@common/constants/routes';
import {StackNavigationProp} from '@react-navigation/stack';

type RootRoute = {
  [ROUTES.auth.BASE_STACK_URL]: {
    screen: AppRouteType['auth'][keyof AppRouteType['auth']];
  };
  [ROUTES.main.BASE_STACK_URL]: {
    screen: AppRouteType['main'][keyof AppRouteType['main']];
  };
};

export type RootNavigator = StackNavigationProp<RootRoute>;
