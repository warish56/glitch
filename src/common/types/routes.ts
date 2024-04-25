import {AppRouteType, ROUTES} from '@common/constants/routes';
import {StackNavigationProp} from '@react-navigation/stack';

type RootRoute = {
  [ROUTES.auth.BASE_STACK_URL]: {
    screen: AppRouteType['auth'][keyof AppRouteType['auth']];
  };
  [ROUTES.home.BASE_STACK_URL]: {
    screen: AppRouteType['home'][keyof AppRouteType['home']];
  };
};

export type RootNavigator = StackNavigationProp<RootRoute>;
