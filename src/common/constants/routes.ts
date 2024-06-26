export const ROUTES = {
  init: {
    BASE_STACK_URL: 'INIT',
  },
  auth: {
    BASE_STACK_URL: 'AUTH',
    login: 'LOGIN',
  },
  main: {
    BASE_STACK_URL: 'MAIN',
    home: 'HOME',
    events: 'EVENTS',
    event: 'EVENT',
    profile: 'PROFILE',
  },
} as const;

export type AppRouteType = typeof ROUTES;
export type TopLevelRoutes = AppRouteType[keyof AppRouteType]['BASE_STACK_URL'];
