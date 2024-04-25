export const ROUTES = {
  init: {
    BASE_STACK_URL: 'INIT',
  },
  auth: {
    BASE_STACK_URL: 'AUTH',
    login: 'LOGIN',
  },
  home: {
    BASE_STACK_URL: 'HOME',
    main: 'MAIN',
  },
} as const;

export type AppRouteType = typeof ROUTES;
export type TopLevelRoutes = AppRouteType[keyof AppRouteType]['BASE_STACK_URL'];
