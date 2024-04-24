import AsyncStorage from '@react-native-async-storage/async-storage';

type tokenListenerFunc = (token: string) => void;

const createTokenFactory = () => {
  let token: string | null = null;
  const key = 'glitch_tk';
  const listeners = new Set<tokenListenerFunc>();

  const onTokenChange = (callback: tokenListenerFunc) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  };

  const invokeListeners = (newToken: string) => {
    [...listeners].forEach(callback => {
      callback(newToken);
    });
  };

  const getToken = async () => {
    if (!token) {
      token = await AsyncStorage.getItem(key);
    }
    return token;
  };

  const setToken = async (value: string) => {
    await AsyncStorage.setItem(key, value);
    invokeListeners(value);
  };

  const fetchToken = async () => {
    return fetch('/token', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.token);
        return data.token;
      });
  };

  return {
    getToken,
    setToken,
    onTokenChange,
    fetchToken,
  };
};

export const appTokenData = createTokenFactory();
