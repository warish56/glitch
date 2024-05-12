export const API_PREFIX_URL = '/api/v3';

export const API_ROUTES = {
  sendOtp: () => `/generate_code`,
  login: () => `/sessions`,
  componentsStyle: () => `/styles`,
  expo: (category: string, tag: string) => `/expo/${category}/${tag}`,
  screen: (screenName: string) => `/screen/${screenName}`,
};
