import {tokenStore} from '@common/utils/externalStore';
import {useEffect, useSyncExternalStore} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useToken = () => {
  const tokenKey = 'glitch_tk';

  const tokenData = useSyncExternalStore(
    tokenStore.subscribe,
    tokenStore.getValue,
  );

  const getTokenFromLocalStorage = async () => {
    const val = await AsyncStorage.getItem(tokenKey);
    return val;
  };

  const setToken = async (value: string) => {
    await AsyncStorage.setItem(tokenKey, value);
    tokenStore.setValue({
      ...tokenData,
      value,
    });
  };

  const initializeToken = async () => {
    const token = await getTokenFromLocalStorage();
    setToken(token || '');
  };

  // used to get the token from local storge fro the first time if initially empty
  useEffect(() => {
    if (!tokenData.value) {
      initializeToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    setToken,
    token: tokenData.value,
  };
};
