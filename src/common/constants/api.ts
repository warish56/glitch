export const API_ROUTES = {
  loginOtp: () => `/login`,
  verifyOtp: () => `/verify`,
  componentsStyle: () => `/styles`,
  expo: (category: string, tag: string) => `/expo/${category}/${tag}`,
  screen: (screenName: string) => `/screen/${screenName}`,
};
