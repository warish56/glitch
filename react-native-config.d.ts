declare module 'react-native-config' {
  export interface NativeConfig {
    API_ROOT_URL?: string;
    CUSTOM_APP1_ID?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
