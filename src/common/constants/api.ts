export const API_ROUTES = {
  login: () => `/login`,
  componentsStyle: () => `/styles`,
  expo: (category: string, tag: string) => `/expo/${category}/${tag}`,
  screen: (screenName: string) => `/screen/${screenName}`,
};
